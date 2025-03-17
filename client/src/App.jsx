import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SwipePage from "./pages/SwipePage";
import AuthPage from "./pages/AuthPage";
import ProfilePage from "./pages/ProfilePage";
import ChatPage from "./pages/ChatPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import About from "./components/about";
import AiChat from "./components/AiChat";
import { Navigate } from "react-router-dom"; // Ensure Navigate is imported

function App() {
  const { checkAuth, authUser, checkingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) return null;

  return (
    <div className='absolute inset-0 -z-10 h-full w-full bg-white'>
      <Routes>
        {/* Protected Routes: Redirect if not authenticated */}
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/auth" />} />
        <Route path='/chat/:id' element={authUser ? <ChatPage /> : <Navigate to="/auth" />} />
        <Route path='/swipe' element={authUser ? <SwipePage /> : <Navigate to="/auth" />} /> 

        {/* Public Routes */}
        <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path='/about' element={<About />} />
        <Route path='/ai-chat' element={<AiChat />} />

        {/* Catch-all: Redirect unknown routes to home */}
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;



