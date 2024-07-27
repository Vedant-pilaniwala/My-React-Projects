

export default function ImageCard({ image }) {
    const tags = image.tags.split(',');

    return (
        <div className="max-w-sm m-3 overflow-hidden rounded-md shadow-2xl shadow-slate-500">
            <img src={image.webformatURL} alt="" className="w-full" />
            <div className="px-3 py-4">
                <div className="w-full px-3 text-purple-800 font-bold text-xl">
                    Photos by <i>"{image.user}"</i>
                </div>
                <ul className="px-3 py-3">
                    <li className="">
                        <strong className="font-sans">Views:</strong> <i>{image.views}</i>
                    </li>
                    <li>
                        <strong>Likes:</strong>  <i>{image.likes}</i>
                    </li>
                    <li>
                        <strong>Subscription:</strong>  <i>{image.downloads}</i>
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag) => {
                    return (
                        <span className="inline-block mr-2 bg-gray-200 text-sm font-semibold mb-2 px-3 py-1 rounded-full text-gray-700">
                            {tag}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}