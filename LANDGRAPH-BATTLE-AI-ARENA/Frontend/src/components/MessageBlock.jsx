import SolutionCard from './SolutionCard'
import JudgePanel from './JudgePanel'

export default function MessageBlock({ data }) {
  const { solution_1, solution_2, judge } = data

  // Determine winner label
  const winnerLabel =
    judge.solution_1_score > judge.solution_2_score
      ? 'Agent 1'
      : judge.solution_2_score > judge.solution_1_score
      ? 'Agent 2'
      : 'Tie'

  return (
    <div className="flex flex-col gap-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
      {/* Side-by-side solution cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <SolutionCard
          agentNum={1}
          score={judge.solution_1_score}
          content={solution_1}
        />
        <SolutionCard
          agentNum={2}
          score={judge.solution_2_score}
          content={solution_2}
        />
      </div>

      {/* Judge verdict panel */}
      <JudgePanel
        score1={judge.solution_1_score}
        score2={judge.solution_2_score}
        reasoning1={judge.solution_1_reasoning}
        reasoning2={judge.solution_2_reasoning}
        winner={winnerLabel}
      />
    </div>
  )
}
