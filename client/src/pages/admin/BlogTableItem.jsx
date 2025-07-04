import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';


const BlogTableItem = ({blog,fetchBlogs,index}) => {
  
    const {title,createdAt}= blog;
    const BlogDate= new Date(createdAt)
    const {axios}= useAppContext();
    
   //  const deleteBlog= async()=>{
   //    const confirm= window.confirm("Are you confirm to delete this blog?")
   //    if(!confirm) return;
   //    try {
   //       const {data} = await axios.post('/api/v1/blog/delete',{id: blog._id})
   //       if(data.success){
   //          toast.success(data.message)
   //          await fetchBlogs()
   //       } else{
   //          toast.error(data.message);
   //       }
   //    } catch (error) {
   //       toast.error(error.message);
         
   //    }
   //  }


let isToastOpen = false; // flag to prevent multiple toasts

const deleteBlog = async () => {
  if (isToastOpen) return;

  isToastOpen = true; // mark toast as open

  toast((t) => (
    <div className="w-[300px] sm:w-[360px] bg-white border border-gray-200 rounded-xl shadow-lg p-5 text-center">
      <p className="text-black text-base font-semibold mb-4">
        Are you sure you want to delete this blog?
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={async () => {
            toast.loading("Deleting...", { id: t.id });
            try {
              const { data } = await axios.post('/api/v1/blog/delete', { id: blog._id });
              if (data.success) {
                toast.success(data.message, { id: t.id });
                await fetchBlogs();
              } else {
                toast.error(data.message, { id: t.id });
              }
            } catch (error) {
              toast.error(error.message || "Something went wrong", { id: t.id });
            } finally {
              isToastOpen = false; // reset the flag
            }
          }}
          className="px-4 py-2 rounded-md bg-[#6b46ff] text-white font-medium hover:bg-[#5a3ae0] transition"
        >
          Confirm
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
            isToastOpen = false; // reset the flag on cancel
          }}
          className="px-4 py-2 rounded-md border border-black text-black font-medium hover:bg-gray-100 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  ), {
    duration: Infinity,
    position: 'top-center',
    id: 'confirm-delete-blog', // optional ID for further control
  });
};


    
    const togglePublish= async()=>{
      try {
         const {data}= await axios.post('/api/v1/blog/toggle-publish',{id:blog._id})
         if(data.success){
            toast.success(data.message)
            await fetchBlogs()
         } else{
            toast.error(data.message);
         }
      } catch (error) {
         toast.error(error.message);
         
      }
   }
  
    return (
    <tr className='border-y border-gray-300'>
        <th className='px-2 py-4'>{index}</th>
         <td className='px-2 py-4'>{title}</td>
         <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
         <td className='px-2 py-4 max-sm:hidden'>
            <p className={`${blog.isPublished?"text-green-600" : "text-orange-700"}`}
            >{blog.isPublished?'Published': 'UnPublished'}</p>
         </td>
         <td className='px-2 py-4 flex text-xs gap-3'>
            <button 
            onClick={togglePublish}
            className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished?'Unpublish':'Publish'}</button>
            <img 
            onClick={deleteBlog}
            src={assets.cross_icon} alt="" className='w-8 hover:scale-110 transition-all cursor-pointer'/>
         </td>
    </tr>
  )
}

export default BlogTableItem