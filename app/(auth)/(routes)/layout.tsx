import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return ( 
    <div className="h-full flex items-center justify-center relative">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="/bgvv.mp4" type="video/mp4" /> 
      </video>
      <div className="relative z-10">
        {children}
      </div>
    </div>
   );
}
 
export default AuthLayout;

// const AuthLayout = ({ children }: { children: React.ReactNode }) => {
//   return ( 
//     <div className="h-full flex items-center justify-center">
//       {children}
//     </div>
//    );
// }
 
// export default AuthLayout;
