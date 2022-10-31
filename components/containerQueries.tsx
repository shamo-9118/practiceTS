export const containerQuereis = () => {
    return (
        <div className="flex flex-col gap-4 p-4">
            <div className="@container w-[200px]">
                <div className="bg-green-300 @[300px]:bg-gray-300 p-8">
                    Container Queries適用
                </div>
            </div>
            <div className="w-[300px]">
                <div className="bg-yellow-300 p-8">300pxの要素</div>
            </div>
        </div>
    );
};
