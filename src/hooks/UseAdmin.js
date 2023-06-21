// import  { useEffect, useState } from 'react';

// const UseAdmin = (user) => {
//     const [admin,setAdmin]=useState(false)
//     const [adminLoading,setAdminLoading]=useState(true)
//     useEffect(() => {
//         const email = user?.email
//         fetch(`https://regal-residence-server.vercel.app/admin/${email}`,{

//         method:'GET',
//         headers:{
//             'content-type':'application/json',
            
//         },
//         })
//         .then(res=>res.json())
//         .then(data=>{
           
//             setAdmin(data.admin)
//             setAdminLoading(false)
//              console.log("this",data.admin)
//         })
//     }, [user])

//     return [admin,adminLoading]
// };

// export default UseAdmin;
import { useEffect, useState } from 'react';

const UseAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await fetch(`https://regal-residence-server.vercel.app/admin/${user.email}`);
        const data = await response.json();

        setAdmin(data.admin);
        setAdminLoading(false);
      } catch (error) {
        console.error('Error fetching admin status:', error);
        setAdmin(false);
        setAdminLoading(false);
      }
    };

    if (user && user.email) {
      fetchAdminStatus();
    } else {
      setAdmin(false);
      setAdminLoading(false);
    }
  }, [user]);

  return [admin, adminLoading];
};

export default UseAdmin;

