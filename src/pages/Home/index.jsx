import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
    
        const notify = () => {
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {backgroundColor: 'red'}
                });
        }
    

  return (
    <div>
          <button onClick={notify}>Notify!</button>
          <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          
            />
    </div>
  )
}
