interface DetailOverViewProps {
    overViewStrArray: string[]
}

export function DetailOverView({ overViewStrArray }: DetailOverViewProps) {
    return (
        <div className="space-y-1">
            <p className="font-bold text-xl">概要</p>
            <p className="text-sm">
                { overViewStrArray.map((overViewStr, index) => (
                    <span key={index}>
                        { overViewStr }<br />
                    </span>
                )) }
            </p>
        </div>
    )
}