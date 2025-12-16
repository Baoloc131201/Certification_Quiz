import React, { useState } from "react";
import * as mammoth from "mammoth/mammoth.browser";

const WordQuizImporter = () => {
  const [result, setResult] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const arrayBuffer = await file.arrayBuffer();

    const { value: html } = await mammoth.convertToHtml({ arrayBuffer });

    console.log("RAW HTML FROM DOCX:", html);

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      `<html><body>${html}</body></html>`,
      "text/html"
    );

    // debug xem trong body có gì
     console.log("BODY INNER HTML:", doc.body.innerHTML);
    const quizObjects = extractQuizFromDom(doc);
    setResult(quizObjects);
    console.log("QUIZ JSON:", quizObjects);
  };

  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(result, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "quiz.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Import Word Quiz (.docx)</h2>
      <input type="file" accept=".docx" onChange={handleFileChange} />

      <button
        onClick={downloadJson}
        disabled={!result.length}
        style={{ marginLeft: 12 }}
      >
        Download JSON
      </button>

      <pre style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default WordQuizImporter;

function extractQuizFromDom(doc) {
  const result = [];

  let currentCategory = "";
  let currentQuestion = null;

  const cleanText = (node) =>
    (node.textContent || "").replace(/\s+/g, " ").trim();

  const flushQuestion = () => {
    if (currentQuestion && currentQuestion.options.length > 0) {
      // loại bỏ option trùng nhau nếu có
      currentQuestion.options = Array.from(
        new Set(currentQuestion.options.map((o) => o.trim()))
      );
      result.push(currentQuestion);
    }
    currentQuestion = null;
  };

  // tách nhiều option từ một text nếu nó chứa a./b./c./d.
  const splitOptionsFromText = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return [];

    // nếu trong text có ít nhất 2 marker a./b./c./d. thì split
    const markers = trimmed.match(/[a-z]\s*[\.\)]\s+/gi);
    if (markers && markers.length >= 2) {
      const parts = trimmed.split(/(?=[a-z]\s*[\.\)]\s+)/i);
      return parts
        .map((part) =>
          part
            .trim()
            .replace(/^[a-z]\s*[\.\)]\s+/i, "") // bỏ a./b./...
            .trim()
        )
        .filter(Boolean);
    }

    // mặc định: 1 option
    return [trimmed];
  };

  // lấy node theo đúng thứ tự xuất hiện
  const nodes = Array.from(doc.querySelectorAll("h1, h2, h3, p, li"));

  for (const node of nodes) {
    const tag = node.tagName.toLowerCase();
    let text = cleanText(node);
    if (!text) continue;

    // 1) CATEGORY
    if (tag === "h1" || tag === "h2" || tag === "h3") {
      // kết thúc câu hỏi đang dở
      flushQuestion();

      // nếu bạn muốn giữ luôn "4_Backoffice..." thì dùng nguyên text;
      // nếu muốn bỏ số thứ tự thì bỏ comment dòng replace
      // text = text.replace(/^\d+\s*[_\.\)]\s*/, "");
      currentCategory = text;
      continue;
    }

    // bỏ dòng Note
    if (/^note:/i.test(text)) continue;

    // 2) QUESTION: dòng kết thúc bằng ?
    const isQuestionLine = /\?\s*$/.test(text);

    if (isQuestionLine) {
      // bắt đầu câu mới -> flush câu cũ
      flushQuestion();

      // bỏ "1. " / "2)" nếu có
      const questionText = text
        .replace(/^\d+\s*[\.\)]\s*/, "")
        .replace(/Note:\s*.*$/i, "")
        .trim();

      currentQuestion = {
        category: currentCategory,
        question: questionText,
        options: [],
        correctAnswers: [] // tạm để trống, xử lý highlight bên dưới
      };

      continue;
    }

    // 3) OPTION: mọi dòng sau question, cho đến khi gặp question mới / category
    if (currentQuestion) {
      // không remove a./b./c./d. ở đây để còn marker mà split
      const optionTexts = splitOptionsFromText(text);

      for (const optText of optionTexts) {
        const optionIndex = currentQuestion.options.length;
        currentQuestion.options.push(optText);

        // detect đáp án đúng nếu còn highlight
        const hasHighlight =
          node.querySelector("span[style*='background']") ||
          node.querySelector("span[style*='background-color']") ||
          node.querySelector("span[class*='Highlight'], span[class*='highlight']");

        if (hasHighlight) {
          currentQuestion.correctAnswers.push(optionIndex);
        }
      }
    }
  }

  // flush câu cuối cùng
  flushQuestion();

  return result;
}
