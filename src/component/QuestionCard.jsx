import { Box, Button, Card, CardContent, Checkbox, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../css/App.css";

export default function QuestionCard({
  questionData,
  onNext,
  onPrev,
  answered,
  setAnswered,
  initialSelected,
}) {
  const [selected, setSelected] = useState(initialSelected || []);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    setSelected(initialSelected || []);
    setShowResult(false);
  }, [questionData]);

  const handleSelect = (index) => {
    const updatedSelection = selected.includes(index)
      ? selected.filter((i) => i !== index)
      : [...selected, index];
    setSelected(updatedSelection);
    setAnswered(updatedSelection.length > 0);
  };

  const serializeAnswers = (values = []) => [...values].sort().join(",");

  const isCorrect = () =>
    serializeAnswers(selected) === serializeAnswers(questionData.correctAnswers);

  const handleCheck = () => {
    setShowResult(true);
    setAnswered(true);
  };

  return (
    <div>
<Card
      sx={{
        width: "100%",
        height: 1200,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", flex: 1, p: 3 }}
      >
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            pr: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h2" fontWeight={600}>
            {questionData.question}
          </Typography>

          {questionData.correctAnswers.length > 1 && (
            <Typography variant="body2" color="text.secondary">
              Info: This question has multiple correct answers. Please choose{" "}
              <strong>{questionData.correctAnswers.length}</strong> answers.
            </Typography>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {questionData.options.map((option, idx) => {
              const isAnswerCorrect = questionData.correctAnswers.includes(idx);
              const isSelected = selected.includes(idx);
              const isSelectedWrong = isSelected && !isAnswerCorrect;
              const isMissedCorrect =
                showResult && isAnswerCorrect && !isSelected;

              return (
                <Box
                  key={idx}
                  component="label"
                  sx={(theme) => ({
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    padding: theme.spacing(1.5),
                    borderRadius: 1,
                    borderWidth: 1,
                    borderStyle: "solid",
                    cursor: showResult ? "default" : "pointer",
                    transition: "background-color 0.15s ease, border-color 0.15s ease",
                    borderColor: isSelected
                      ? theme.palette.primary.light
                      : theme.palette.grey[300],
                    backgroundColor: isSelected
                      ? theme.palette.primary.light + "22"
                      : showResult && isSelectedWrong
                      ? theme.palette.error.light + "33"
                      : theme.palette.background.paper,
                    "&:hover": !showResult && !isSelected
                      ? { backgroundColor: theme.palette.grey[50] }
                      : {},
                    ...(showResult &&
                      isAnswerCorrect && {
                        borderColor: theme.palette.success.main,
                        color: theme.palette.success.dark,
                        fontWeight: 600,
                      }),
                    ...(showResult &&
                      isSelectedWrong && {
                        borderColor: theme.palette.error.main,
                      }),
                    ...(showResult &&
                      isMissedCorrect && {
                        boxShadow: `0 0 0 2px ${theme.palette.success.main}`,
                      }),
                  })}
                >
                  <Checkbox
                    size="small"
                    checked={isSelected}
                    onChange={() => handleSelect(idx)}
                    disabled={showResult}
                  />

                  <Typography variant="body1" sx={{ wordBreak: "break-word" }}>
                    {option}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {showResult && (
            <Box
              sx={(theme) => ({
                p: 1.5,
                borderRadius: 1,
                backgroundColor: isCorrect()
                  ? theme.palette.success.light + "33"
                  : theme.palette.error.light + "33",
                color: isCorrect()
                  ? theme.palette.success.dark
                  : theme.palette.error.dark,
                fontWeight: 600,
              })}
            >
              {isCorrect()
                ? "Great job, that's correct!"
                : "Incorrect. Please review your selection."}
            </Box>
          )}
        </Box>

        <Box
          sx={{
            mt: "auto",
            pt: 2,
            pb: 100,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              setShowResult(false);
              setSelected([]);
              setAnswered(false);
              onPrev();
            }}
          >
            BACK
          </Button>

          <Button onClick={handleCheck} disabled={showResult}>
            Check
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              setShowResult(false);
              setSelected([]);
              onNext(isCorrect(), selected);
            }}
            disabled={!answered}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
    </div>
   
  );
}
