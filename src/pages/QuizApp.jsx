import { useEffect, useMemo, useState } from "react";
import QuestionCard from "../component/QuestionCard";
import { questions } from "../data/questions";

export default function QuizApp() {
  const QUIZ_DURATION = 60 * 60; // 60 minutes (in seconds)

  const PAGE_SIZE = 10; // số câu mỗi “trang” trong navigator

  const serializeAnswers = (values = []) => [...values].sort().join(",");

  // Hàm shuffle chuẩn Fisher–Yates (JS thuần, không type)
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Tạo bộ câu hỏi mới với options đã xáo trộn và correctAnswers được map lại
  const createShuffledQuestions = () => {
    return questions.map((q) => {
      const originalOptions = q.options;
      const indices = originalOptions.map((_, idx) => idx);

      // Xáo trộn index
      const shuffledIndices = shuffleArray(indices);

      // Options mới theo thứ tự đã xáo
      const newOptions = shuffledIndices.map(
        (originalIndex) => originalOptions[originalIndex]
      );

      // Map lại correctAnswers từ index cũ sang index mới
      const newCorrectAnswers = (q.correctAnswers ?? []).map((originalIndex) =>
        shuffledIndices.indexOf(originalIndex)
      );

      return {
        ...q,
        options: newOptions,
        correctAnswers: newCorrectAnswers,
      };
    });
  };

  // State chứa bộ câu hỏi đã xáo trộn
  const [shuffledQuestions, setShuffledQuestions] = useState(() =>
    createShuffledQuestions()
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [navPage, setNavPage] = useState(0); 

  useEffect(() => {
    setNavPage(Math.floor(currentIndex / PAGE_SIZE));
  }, [currentIndex]);

  const [showSummary, setShowSummary] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState(() =>
    Array(questions.length).fill(null)
  );
  const [timeLeft, setTimeLeft] = useState(QUIZ_DURATION);
  const [timeExpired, setTimeExpired] = useState(false);

  // Tính điểm dựa trên shuffledQuestions
  const score = useMemo(
    () =>
      userAnswers.reduce((total, answer, index) => {
        if (!answer || answer.length === 0) return total;
        const correct = shuffledQuestions[index]?.correctAnswers ?? [];
        return serializeAnswers(answer) === serializeAnswers(correct)
          ? total + 1
          : total;
      }, 0),
    [userAnswers, shuffledQuestions]
  );

  // Tính phần trăm đúng
  const correctPercentage = useMemo(() => {
    if (!shuffledQuestions.length) return 0;
    return Math.round((score / shuffledQuestions.length) * 100);
  }, [score, shuffledQuestions]);

  useEffect(() => {
    if (showSummary) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setTimeExpired(true);
          setShowSummary(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [showSummary]);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleNext = (_wasCorrect, selectedIndices) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentIndex] = selectedIndices;
    setUserAnswers(updatedAnswers);
    setAnswered(false);

    if (currentIndex + 1 < shuffledQuestions.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleRestart = () => {
    // Xáo trộn lại bộ câu hỏi mới
    const newShuffled = createShuffledQuestions();
    setShuffledQuestions(newShuffled);

    // Reset state
    setCurrentIndex(0);
    setShowSummary(false);
    setAnswered(false);
    setUserAnswers(Array(questions.length).fill(null));
    setTimeLeft(QUIZ_DURATION);
    setTimeExpired(false);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setAnswered(Boolean(userAnswers[prevIndex]?.length));
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col items-center gap-2 mb-6">
          <h1 className="text-2xl font-bold text-center">
            SAP Commerce Certification Quiz
          </h1>
          {!showSummary && (
            <p className="text-lg font-semibold text-red-600">
              Time Remaining: {formatTime(timeLeft)}
            </p>
          )}
        </div>

        {showSummary ? (
          <div
            className="bg-white shadow-lg rounded-lg text-center p-6 flex flex-col items-center gap-4"
            style={{ minHeight: "520px" }}
          >
            <p className="text-xl font-semibold">
              {correctPercentage}% You have completed {score}/
              {shuffledQuestions.length} questions correctly.
            </p>

            {timeExpired && (
              <p className="text-lg font-semibold text-red-600">
                Time's up! The quiz has been submitted automatically.
              </p>
            )}

            <button
              className="mt-auto flex flex-wrap gap-2 pt-4"
              onClick={handleRestart}
            >
              Undo the lesson
            </button>
          </div>
        ) : (
          <>
            {/* <p className="mb-3 text-right text-sm text-slate-600">
            Question {currentIndex + 1}/{shuffledQuestions.length}
          </p> */}
            {/* <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-slate-600">
                  Question {currentIndex + 1}/{shuffledQuestions.length}
                </p>
              </div>

              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 flex-nowrap">
                  {shuffledQuestions.map((_, idx) => {
                    const isCurrent = idx === currentIndex;
                    const isAnswered =
                      userAnswers[idx] && userAnswers[idx].length > 0;

                    const baseClasses =
                      "w-8 h-8 flex items-center justify-center rounded text-sm cursor-pointer border transition-colors flex-none";

                    let statusClasses =
                      "bg-white border-slate-300 text-slate-700";

                    if (isAnswered) {
                      statusClasses =
                        "bg-emerald-100 border-emerald-500 text-emerald-800";
                    }

                    if (isCurrent) {
                      statusClasses =
                        "bg-blue-500 border-blue-500 text-white font-semibold";
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`${baseClasses} ${statusClasses}`}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setAnswered(Boolean(userAnswers[idx]?.length));
                        }}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div> */}
{/* Thanh Question / Navigator */}
<div className="mb-3">
  <div className="flex justify-between items-center mb-2">
    <p className="text-sm text-slate-600">
      Question {currentIndex + 1}/{shuffledQuestions.length}
    </p>
    <p className="text-xs text-slate-500">
      Group {navPage + 1}/
      {Math.ceil(shuffledQuestions.length / PAGE_SIZE)}
    </p>
  </div>

  {/* Tính các index sẽ hiển thị trong nhóm hiện tại */}
  {(() => {
    const total = shuffledQuestions.length;
    const start = navPage * PAGE_SIZE;
    const end = Math.min(start + PAGE_SIZE, total);
    const indices = [];
    for (let i = start; i < end; i++) indices.push(i);

    return (
      <div className="flex items-center gap-2">
        {/* nút prev nhóm */}
        <button
          type="button"
          className="px-2 py-1 text-xs border rounded disabled:opacity-40"
          onClick={() => setNavPage((p) => Math.max(0, p - 1))}
          disabled={navPage === 0}
        >
          ◀
        </button>

        <div className="flex gap-1 flex-nowrap">
          {indices.map((idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered =
              userAnswers[idx] && userAnswers[idx].length > 0;

            const baseClasses =
              "w-8 h-8 flex items-center justify-center rounded text-xs cursor-pointer border transition-colors flex-none";

            let statusClasses =
              "bg-white border-slate-300 text-slate-700";

            if (isAnswered) {
              statusClasses =
                "bg-emerald-100 border-emerald-500 text-emerald-800";
            }

            if (isCurrent) {
              statusClasses =
                "bg-blue-500 border-blue-500 text-white font-semibold";
            }

            return (
              <button
                key={idx}
                type="button"
                className={`${baseClasses} ${statusClasses}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  setAnswered(Boolean(userAnswers[idx]?.length));
                }}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* nút next nhóm */}
        <button
          type="button"
          className="px-2 py-1 text-xs border rounded disabled:opacity-40"
          onClick={() =>
            setNavPage((p) =>
              p + 1 < Math.ceil(shuffledQuestions.length / PAGE_SIZE)
                ? p + 1
                : p
            )
          }
          disabled={
            navPage + 1 >= Math.ceil(shuffledQuestions.length / PAGE_SIZE)
          }
        >
          ▶
        </button>
      </div>
    );
  })()}
</div>

            <QuestionCard
              questionData={shuffledQuestions[currentIndex]}
              onNext={(wasCorrect, selectedIndices) =>
                handleNext(wasCorrect, selectedIndices)
              }
              onPrev={handlePrev}
              answered={answered}
              setAnswered={setAnswered}
              initialSelected={userAnswers[currentIndex] || []}
            />
          </>
        )}
      </div>
    </div>
  );
}

