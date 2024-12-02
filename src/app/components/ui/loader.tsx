import {SpinnerCircularFixed} from 'spinners-react';

export default function Loader() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-100">
            <SpinnerCircularFixed 
                    size={80} 
                    thickness={180} 
                    speed={150} 
                    color="#EF4444" 
                    secondaryColor="white"
                />
        </div>
    );
}