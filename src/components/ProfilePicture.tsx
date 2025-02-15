const ProfilePicture = ({image}:{image:string}) => {
    return (
        <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-full p-[2px]">
                <div className="w-full h-full rounded-full bg-black p-[2px]">
                    <img
                        src={image}
                        alt="user"
                        className="w-full h-full object-cover object-top rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProfilePicture