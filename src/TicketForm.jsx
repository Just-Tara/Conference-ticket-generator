<<<<<<< HEAD
import React, {useState} from "react"
import logo from "./assets/logo-full.svg";
import infoIcon from "./assets/icon-info.svg";
import patternLine from "./assets/pattern-lines.svg";
import patternLineTop from "./assets/pattern-squiggly-line-top.svg";
import patternLineBottom from "./assets/pattern-squiggly-line-bottom-desktop.svg";
import patterCircle from "./assets/pattern-circle.svg"
import uploadImage from "./assets/icon-upload.svg"
import mobilePatternBottom from "./assets/pattern-squiggly-line-bottom-mobile-tablet.svg"

function TicketForm({ onSubmit }) {

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState({});

    const MAX_SIZE = 500 * 1024;

    const validateAndPreview = (file) => {
    if (!file) return;
    if (file.size > MAX_SIZE) {
      setError((prev) => ({ ...prev, avatar: 
        `File too large. Please upload a photo under 500KB.` }));
      return;
    }
    setError((prev) => ({ ...prev, avatar: "" }));
    setAvatarPreview(URL.createObjectURL(file));
  };
    const handleFileChange = (e) => {
        validateAndPreview(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        validateAndPreview(e.dataTransfer.files[0])
    };

    const handleDragOver= (e) => {
        e.preventDefault();
    };

    const removeImage = () => {
        setAvatarPreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!avatarPreview) newErrors.avatar = "Please upload an image";

        if (!name.trim()) newErrors.name = "Please fill in your name"; 

        if (!email.trim()) {newErrors.email= "Please enter your email address";} else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                newErrors.email = "Please enter a valid email address"
            }
        } 
        
        if (!userName.trim()) newErrors.userName = "Please fill in your Github Username"; 
            
        


        setError(newErrors);
        if (Object.keys(newErrors).length === 0)
            {onSubmit({ name, email, userName, avatar:
             avatarPreview });
        }
    }




    return(
    <div className="min-h-screen flex items-center justify-center relative
    bg-[url('./assets/background-desktop.png')] bg-cover bg-center">
        <img src={patternLine} alt="pattern-line"className="brightness-55 absolute inset-0 w-full h-full object-cover" />
       
        <img src={patternLineTop} alt="top-pattern-line" className="absolute top-10 right-0 w-[50%] max-w-[300px]" />
       
       
       
        <img src={patterCircle} alt="circle-pattern" className="absolute top-[-100px] left-2 translate-x-2 brightness-50" />

        <img src={patternLineBottom} alt="tablet-bottom-pattern-line"  className="absolute bottom-0 left-0 w-[60%] max-w-[700px] object-cover hidden sm:block lg:hidden"/>
        <img src={patternLineBottom} alt="desktop-bottom-pattern-line"  className="absolute bottom-0 left-0 w-[60%] max-w-[700px] object-cover hidden lg:block"/>

        <img src={mobilePatternBottom} alt="moblie-view-pattern" className="absolute bottom-0 left-0 w-[60%] max-w-[700px] sm:hidden" />
        
        <img src={patterCircle} alt="circle-pattern" className="absolute right-[5%] brightness-60"/> 
        

    
        
        
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md p-8  text-center text-white"
            id="submitForm"> 
            
            <h2 
                className="flex justify-center"><img 
                src={logo } alt="" />
            </h2>
       <h1 className="text-2xl font-bold leading-snug mb-2">Your Journey to Conding Comf 2025 Starts Here</h1>

            <p className="text-sm text-gray-300 mb-5">Secure your spot at next year's biggest coding conference.</p>
            

            <label htmlFor="uploadingImage" className="flex">Upload Image</label>
            
            <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative p-4 rounded-[10px] bg-white/5 border-2 border-dashed focus:ring-white/40 border-white/40 hover:border-white/60 transition"
                
            >{avatarPreview ? (
                <div className="relative flex flex-col items-center space-y-3">
                    <img 
                    src={avatarPreview} 
                    alt="preview" 
                    className="w-[43px] h-10 object-cover rounded-md border-2 border-white/40"/>
                
                <div className="flex gap-3">
                    
                    <button 
                        type="button" 
                        onClick={removeImage} 
                        className="text-[13px] relative px-2 py-1
                            rounded-md bg-white/5
                            text-gray-400 cursor-pointer underline">Remove image
                    </button>

                    <label htmlFor="changeImage" className="text-[13px] relative px-2 py-1
                            rounded-md bg-white/5 
                            text-gray-400 cursor-pointer">Change image
                        <input 
                            type="file" 
                            accept="image/png, image/jpeg" 
                            onChange={handleFileChange}
                            id="changeImage" 
                            className="hidden"
                         />
                    </label>
                </div>
                </div>

            ) : (
                <label 
                    htmlFor="avatar"  
                    className=" flex flex-col items-center space-y-2 w-full "
                >
                <img 
                    src={uploadImage} 
                    alt="uploading-icon" 
                    className="cursor-pointer" 
                />
                <p className="text-sm cursor-pointer text-gray-400">
                    Drag and Drop or click to upload
                </p>
                <input 
                    type="file" 
                    id="avatar" 
                    accept="image/png, image/jpeg" 
                    aria-describedby="avatar-error"
                    onChange={handleFileChange}
                    className="hidden"
                />
                </label>
            )}
            </div>
            
            {error.avatar ? <p id="avatar-error"
                className="text-[#f37362ff] text-xs mt-2 flex mb-3">
             <img
                className={`mr-1.5 filter ${error.avatar ? "brightness-125 contrast-125" : "brightness-75"}`}
                src={infoIcon}
                alt="info"
            />



                {error.avatar}</p> : <p  className="text-[10px] sm:text-[14px] flex mt-2 mb-2 text-gray-400"><img className="mr-1.5" src={infoIcon} alt="uploadingImage"/>Upload your photo (JPG or PNG, max size: 500KB).</p>} 
            
            
            <label 
                htmlFor="name" 
                className="float-left"
            >Full Name</label>
            <input 
                type="text" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                id="name"
                aria-describedby="name-error"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.name ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
                {error.name && <p id="name-error"
                className="text-[#f37362ff] text-xs mt-2 flex mb-3"><img 
                className="mr-1.5" src={infoIcon} alt="" /> 
                {error.name}</p>} 
            

             <label 
                htmlFor="emailAddress"
                className="float-left mt-2">Email Address
            </label>
            <input  
                type="email" 
                placeholder="example@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                id="emailAddress"
                aria-describedby="email-error"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.email ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
                {error.email && <p id="email-error"
                className="text-[#f37362ff] text-xs mt-2 flex mb-3"><img 
                className="mr-1.5" src={infoIcon} alt="" />{error.email}</p>} 
           

             <label 
                htmlFor="Github-username" 
                className="float-left mt-2"> Github Username
            </label>
            <input 
                type="text" 
                placeholder="@yourusername" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="Github-username"
                aria-describedby="userName-error"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.userName ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
               {error.userName && <p id="userName-error"
               className="text-[#f37362ff] text-xs mt-2 flex"><img 
               className="mr-1.5" src={infoIcon} alt="" />{error.userName}</p>} 
          

            <button 
                type="submit" 
                className="relative w-full mt-6 py-3 bg-[#e16151ff] font-semibold transition hover:bg-[#e65845] rounded-[10px]" 
                aria-label="Generate my conference ticket">
                Generate My Ticket
            </button>

            <p className="text-xs text-gray-300 mt-5">Challenge by <a href="https://www.frontendmentor.io/?ref=challenge" className="text-blue-400 underline"> Frontend Mentor</a>. Coded by <a href="#" className="text-blue-400 underline">Just-Tara</a>.</p>

        </form>
       
        
</div>
    )
}
=======
import React, {useState} from "react"
import logo from "./assets/logo-full.svg";
import infoIcon from "./assets/icon-info.svg";
import patternLine from "./assets/pattern-lines.svg";
import patternLineTop from "./assets/pattern-squiggly-line-top.svg";
import patternLineBottom from "./assets/pattern-squiggly-line-bottom-desktop.svg";
import patterCircle from "./assets/pattern-circle.svg"
import uploadImage from "./assets/icon-upload.svg"
import mobilePatternBottom from "./assets/pattern-squiggly-line-bottom-mobile-tablet.svg"

function TicketForm({ onSubmit }) {

    const [avatarPreview, setAvatarPreview] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState({});

    const MAX_SIZE = 500 * 1024;

    const validateAndPreview = (file) => {
    if (!file) return;
    if (file.size > MAX_SIZE) {
      setError((prev) => ({ ...prev, avatar: 
        `File too large. Please upload a photo under 500KB.` }));
      return;
    }
    
        
{
    }
    setError((prev) => ({ ...prev, avatar: "" }));
    setAvatarPreview(URL.createObjectURL(file));
  };
    const handleFileChange = (e) => {
        validateAndPreview(e.target.files[0]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        validateAndPreview(e.dataTransfer.files[0])
    };

    const handleDragOver= (e) => {
        e.preventDefault();
    };

    const removeImage = () => {
        setAvatarPreview(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!avatarPreview) newErrors.avatar = "Please upload an image";

        if (!name.trim()) newErrors.name = "Please fill in your name"; 

        if (!email.trim()) newErrors.email= "Please enter a valid email address"; 
        
        if (!userName.trim()) newErrors.userName = "Please fill in your Github Username"; 
            
        


        setError(newErrors);
        if (Object.keys(newErrors).length === 0)
            {onSubmit({ name, email, userName, avatar:
             avatarPreview });
        }
    }




    return(
    <div className="min-h-screen flex items-center justify-center relative
    bg-[url('./assets/background-desktop.png')] bg-cover bg-center">
        <img src={patternLine} alt="pattern-line"className="brightness-55 absolute inset-0 w-full h-full object-cover" />
       
        <img src={patternLineTop} alt="top-pattern-line" className="absolute top-10 right-0 w-[50%] max-w-[300px]" />
       
       
       
        <img src={patterCircle} alt="circle-pattern" className="absolute top-[-100px] left-2 translate-x-2 brightness-50" />

        <img src={patternLineBottom} alt="tablet-bottom-pattern-line"  className="absolute bottom-0 left-0 w-[60%] max-w-[700px] object-cover hidden sm:block lg:hidden"/>
        <img src={patternLineBottom} alt="desktop-bottom-pattern-line"  className="absolute bottom-0 left-0 w-[60%] max-w-[700px] object-cover hidden lg:block"/>

        <img src={mobilePatternBottom} alt="moblie-view-pattern" className="absolute bottom-0 left-0 w-[60%] max-w-[700px] sm:hidden" />
        
        <img src={patterCircle} alt="circle-pattern" className="absolute right-[5%] brightness-60"/> 
        

    
        
        
        <form 
            onSubmit={handleSubmit} 
            className="w-full max-w-md p-8  text-center text-white"
            id="submitForm"> 
            
            <h2 
                className="flex justify-center"><img 
                src={logo } alt="" />
            </h2>
       <h1 className="text-2xl font-bold leading-snug mb-2">Your Journey to Conding Comf 2025 Starts Here</h1>

            <p className="text-sm text-gray-300 mb-5">Secure your spot at next year's biggest coding conference.</p>
            

            <label htmlFor="uploadingImage" className="flex">Upload Image</label>
            
            <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative p-4 rounded-[10px] bg-white/5 border-2 border-dashed border-white/40 hover:border-white/60 transition"
                
            >{avatarPreview ? (
                <div className="relative flex flex-col items-center space-y-3">
                    <img 
                    src={avatarPreview} 
                    alt="preview" 
                    className="w-[43px] h-10 object-cover rounded-md border-2 border-white/40"/>
                
                <div className="flex gap-3">
                    
                    <button 
                        type="button" 
                        onClick={removeImage} 
                        className="text-[13px] relative px-2 py-1
                            rounded-md bg-white/5
                            text-gray-400 cursor-pointer underline">Remove image
                    </button>

                    <label htmlFor="changeImage" className="text-[13px] relative px-2 py-1
                            rounded-md bg-white/5 
                            text-gray-400 cursor-pointer">Change image
                        <input 
                            type="file" 
                            accept="image/PNG, image/jpeg" 
                            onChange={handleFileChange}
                            id="changeImage" 
                            className="hidden"
                         />
                    </label>
                </div>
                </div>

            ) : (
                <label 
                    htmlFor="avatar"  
                    className=" flex flex-col items-center space-y-2 w-full "
                >
                <img 
                    src={uploadImage} 
                    alt="uploading-icon" 
                    className="cursor-pointer" 
                />
                <p className="text-sm cursor-pointer text-gray-400">
                    Drag and Drop or click to upload
                </p>
                <input 
                    type="file" 
                    id="avatar" 
                    accept="image/png, image/jpeg" 
                    onChange={handleFileChange}
                    className="hidden"
                />
                </label>
            )}
            </div>
            
            {error.avatar ? <p 
                className="text-[#f37362ff] text-xs mt-2 flex mb-3">
                <img className="mr-1.5 " src={infoIcon} alt="uploadingImage" 
            />
                {error.avatar}</p> : <p className="text-xs flex mt-2 mb-2 text-gray-400"><img className="mr-1.5" src={infoIcon} alt="uploadingImage"/>Upload your photo (JPG or PNG, max size: 500KB).</p>} 
            
            
            <label 
                htmlFor="name" 
                className="float-left"
            >Full Name</label>
            <input 
                type="text" 
                placeholder="Full Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                id="name"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.name ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
                {error.name && <p 
                className="text-[#f37362ff] text-xs mt-2 flex mb-3"><img 
                className="mr-1.5" src={infoIcon} alt="" /> 
                {error.name}</p>} 
            

             <label 
                htmlFor="emailAddress"
                className="float-left mt-2">Email Address
            </label>
            <input  
                type="text" 
                placeholder="example@email.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                id="emailAddress"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.email ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
                {error.email && <p 
                className="text-[#f37362ff] text-xs mt-2 flex mb-3"><img 
                className="mr-1.5" src={infoIcon} alt="" />{error.email}</p>} 
           

             <label 
                htmlFor="Github-username" 
                className="float-left mt-2"> Github Username
            </label>
            <input 
                type="text" 
                placeholder="@yourusername" 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                id="Github-username"
                className={`relative w-full
                mt-2 p-[10px] rounded-[10px] bg-white/5 border ${ error.userName ? "border-[#f37362ff]" : "border-white/25" } 
                placeholder-grey-400 text-white focus:outline-none 
                focus:ring-2 focus:ring-white/20 cursor-pointer`}
            />
               {error.userName && <p 
               className="text-[#f37362ff] text-xs mt-2 flex"><img 
               className="mr-1.5" src={infoIcon} alt="" />{error.userName}</p>} 
          

            <button 
                type="submit" 
                className="relative w-full mt-6 py-3 bg-[#e16151ff] font-semibold transition hover:bg-[#e65845] rounded-[10px]">
                Generate My Ticket
            </button>

            <p className="text-xs text-gray-300 mt-5">Challenge by <a href="https://www.frontendmentor.io/?ref=challenge" className="text-blue-400 underline"> Frontend Mentor</a>. Coded by <a href="#" className="text-blue-400 underline">Just-Tara</a>.</p>

        </form>
       
        
</div>
    )
}
>>>>>>> b43c897 (Created the ticket generator form page and generator's page)
export default TicketForm