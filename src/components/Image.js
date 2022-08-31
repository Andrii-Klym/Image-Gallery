const Image = ({ data }) => {
  return (
    <>
      <article className="shadow-md bg-white rounded-3xl p-5">
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
          <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
          <div className="pt-5 flex justify-between items-center">
            <img className="w-20 mr-5 rounded-full shadow" src={data.user.profile_image.large} alt={data.user.name} />
            <ul>
              <li className="font-bold">{data.user.name}</li>
              <li>{data.alt_description}</li>
            </ul>
          </div>
        </a>
      </article>
    </>
    
  )
}

export default Image