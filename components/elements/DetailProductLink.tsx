interface DetailProductLinkProps {
    children: React.ReactNode;
}

export function DetailProductLink({ children }: DetailProductLinkProps) {
    return (
        <div className="space-y-1">
        <p className="font-bold text-xl">作品関連リンク</p>
            <div className="h-5 flex space-x-1">
                { children }
            </div>
        </div>
    )
}