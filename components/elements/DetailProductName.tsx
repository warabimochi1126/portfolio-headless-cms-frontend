interface DetailProductNameProps {
    productName: string;
}

export function DetailProductName({ productName }: DetailProductNameProps) {
    return (
        <div className="space-y-1">
            <p className="font-bold text-xl">作品名</p>
            <p className="font-bold text-sm">{ productName }</p>
        </div>
    )
}