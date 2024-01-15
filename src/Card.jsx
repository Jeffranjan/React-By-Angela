const Card = ({ imageUrl, heading, paragraph }) => {
  <div className="px-2 py-2">
    <div className="relative flex max-w-xl rounded overflow-hidden shadow-lg px-10 py-10 bg-yellow-200">
      <div className="cover">
        <img
          className="h-[150px] w-[150px] inline-block rounded-full overflow-hidden border-4 border-white"
          src={imageUrl}
          alt="Card"
        />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{paragraph}</p>
      </div>
    </div>
  </div>;
};

export default Card;
