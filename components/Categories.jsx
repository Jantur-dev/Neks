import { getCategories } from "../services"
import React, {useState, useEffect} from "react"
import Link from "next/link"

const Categories = ({slug}) => {
  const [categories, getCategory] = useState([])
  useEffect(() => {
    getCategories().then((newCategpries) => getCategory(newCategpries))
  }, [])
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 m-8 pb-12">
      <h3 className="text-xl border-b pb-4 mb-8 font-bold">
        Category
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="transition duration-500 cursor-pointer hover:text-purple-600 block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories