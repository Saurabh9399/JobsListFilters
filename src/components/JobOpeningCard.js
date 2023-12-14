import React from 'react'

const JobOpeningCard = ({item}) => {

    const modifiedImagePath = `images/${item.logo.slice(9)}`;


    console.log(modifiedImagePath);
    
  return (
    <div className="flex justify-between w-[93%]  mx-auto p-5 my-2 shadow-lg rounded">
          {/* left side*/}
          <div className="flex">
            {/* company logo */}
            <div className="mr-4">
              <img
                alt="companyLogo"
                className="w-16 rounded-full"
                src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg'
              />
            </div>
            {/* job description */}
            <div className="flex flex-col">
              <div className="text-[rgb(99,186,186)] text-sm font-bold mb-1 hover:cursor-pointer">
                {item.company}
              </div>
              <div className="text-md font-bold hover:text-[rgb(99,186,186)] mb-1">
                {item.position}
              </div>
              <div className="">
                <span className="text-sm text-gray-500">{item?.postedAt}</span>
                <span className="mx-2 font-bold text-gray-400">.</span>
                <span className="text-sm text-gray-500">{item?.contract}</span>
                <span className="mx-2 font-bold text-gray-400">.</span>
                <span className="text-sm text-gray-500">{item?.location}</span>
              </div>
            </div>
          </div>

          {/* right side*/}
          <div className="flex flex-wrap w-[40%] items-center">
            {/* skills tags */}
            {item?.languages?.map((skill) => ( <span className="w-auto h-auto bg-gray-200 px-2 py-0.5 text-sm font-bold text-[rgb(99,186,186)] rounded hover:bg-[rgb(93,165,164)] hover:text-white mx-1" key={skill}>{skill}</span>))}
          </div>
        </div>
  )
}

export default JobOpeningCard



