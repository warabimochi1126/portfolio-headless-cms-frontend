interface OverViewDescriptionProps {
    title: string;
    overViewDescription: string;
}

export function OverViewDescription({ title, overViewDescription }: OverViewDescriptionProps) {
    return (
        <div className="mt-2 ml-2">
            <p className="font-bold text-lg">{ title }</p>
            <p className="text-sm">{ overViewDescription }</p>
        </div>
    )
}