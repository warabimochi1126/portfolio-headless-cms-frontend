interface DetailMainTechnologyProps {
    mainTechStrArray: string[];
    subTechStrArray?: string[];
}

export function DetailMainTechnology({ mainTechStrArray, subTechStrArray }: DetailMainTechnologyProps) {
    return (
        <div className="space-y-1">
            <p className="font-bold text-xl">主な使用技術</p>
            <p className="text-sm">
                { mainTechStrArray.map((mainTechStr, index) => 
                <>
                    <span key={index} className="font-bold">
                        { mainTechStr }
                    </span>
                    {( index < mainTechStrArray.length - 1 || subTechStrArray ) ? " / " : "" }
                </>
                )}
                { subTechStrArray?.map((subTechStr, index) =>
                <>
                    <span key={index}>
                        { subTechStr }
                    </span>
                    { index < subTechStrArray.length - 1 ? " / " : "" }
                </>
                )}
            </p>
        </div>
    )
}