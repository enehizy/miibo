import React from 'react';
import PlaceCard from '../components/PlaceCard';
import Search from '../components/search';
export default function index() {
    return (
        <>
      
        <div className="p-6 space-y-3">
            <h4>Find and book Event spaces with</h4>       
            <svg width="97" height="40" viewBox="0 0 97 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3644 27.1548L12.4883 20.8997C12.4883 16.6471 11.8896 14.5208 10.6923 14.5208C9.8459 14.5208 8.93757 14.9749 7.9673 15.8833C6.99704 16.771 6.33644 17.8857 5.98549 19.2276C5.75841 20.0946 5.64487 21.6532 5.64487 23.9034L5.76873 26.969L3.01278 27.1548C3.05406 22.0971 3.07471 18.9799 3.07471 17.8032L2.88891 12.508L5.05652 12.3222L5.76873 15.3878H5.8926C5.97517 15.3053 6.07839 15.1917 6.20225 15.0472C6.34676 14.8821 6.62545 14.6137 7.03833 14.2421C7.47185 13.8705 7.89505 13.5402 8.30793 13.2512C9.44334 12.4874 10.4859 12.1055 11.4355 12.1055C12.4057 12.1055 13.1386 12.3945 13.634 12.9725C14.1295 13.5505 14.5011 14.3763 14.7488 15.4498L14.9036 15.5117C16.7203 13.2409 18.7744 12.1055 21.0658 12.1055C22.0774 12.1055 22.8412 12.5699 23.3573 13.4989C23.8734 14.4279 24.1315 15.6872 24.1315 17.2767V20.3733C24.1315 23.7796 24.1624 26.0091 24.2243 27.0619L21.5303 27.2477C21.6129 23.2841 21.6542 20.3527 21.6542 18.4534C21.6542 15.9968 21.1071 14.7685 20.013 14.7685C18.9189 14.7685 17.8144 15.3981 16.6997 16.6574C15.6055 17.9167 15.0585 19.1347 15.0585 20.3114L14.9965 26.969L12.3644 27.1548ZM28.8005 14.0873L28.8934 12.0435H33.5073V27L31.061 27.1239C31.061 25.1214 31.0197 22.6958 30.9372 19.8469C30.8546 16.9774 30.803 15.0369 30.7823 14.0253L28.8005 14.0873ZM34.0957 8.51342C34.0957 9.0708 33.9202 9.53529 33.5692 9.90688C33.2389 10.2785 32.7848 10.4643 32.2067 10.4643C31.6287 10.4643 31.1746 10.3404 30.8443 10.0927C30.5346 9.82431 30.3798 9.45272 30.3798 8.97791C30.3798 8.48245 30.5759 8.04893 30.9681 7.67734C31.3604 7.30575 31.8764 7.11996 32.5164 7.11996C33.5692 7.11996 34.0957 7.58445 34.0957 8.51342ZM38.2027 14.0873L38.2956 12.0435H42.9095V27L40.4632 27.1239C40.4632 25.1214 40.422 22.6958 40.3394 19.8469C40.2568 16.9774 40.2052 15.0369 40.1846 14.0253L38.2027 14.0873ZM43.4979 8.51342C43.4979 9.0708 43.3224 9.53529 42.9715 9.90688C42.6412 10.2785 42.187 10.4643 41.609 10.4643C41.031 10.4643 40.5768 10.3404 40.2465 10.0927C39.9368 9.82431 39.782 9.45272 39.782 8.97791C39.782 8.48245 39.9781 8.04893 40.3703 7.67734C40.7626 7.30575 41.2787 7.11996 41.9186 7.11996C42.9715 7.11996 43.4979 7.58445 43.4979 8.51342ZM46.7999 6.9961L46.645 4.67366L51.7234 4.33304L51.2589 14.7995L51.5067 14.9543C52.064 14.3763 52.5285 13.9324 52.9001 13.6228C53.2717 13.2925 53.7878 12.9828 54.4484 12.6938C55.1297 12.4048 55.8522 12.2603 56.616 12.2603C58.2675 12.2603 59.5371 12.8486 60.4248 14.0253C61.3331 15.202 61.7873 16.5645 61.7873 18.1128C61.7873 19.6405 61.5189 21.0649 60.9822 22.3861C60.4661 23.6867 59.6713 24.8014 58.5978 25.7304C57.5244 26.6594 56.3993 27.1239 55.2226 27.1239C54.0459 27.1239 53.0859 26.969 52.3427 26.6594C51.5996 26.3497 50.9906 25.9368 50.5158 25.4207C50.0616 24.9046 49.7003 24.2544 49.432 23.4699C48.9365 22.0661 48.6888 19.9914 48.6888 17.2458C48.6888 14.4795 48.761 11.0216 48.9055 6.87223L46.7999 6.9961ZM55.2535 24.8324C56.3064 24.8324 57.1837 24.2028 57.8856 22.9435C58.6082 21.6636 58.9694 20.3424 58.9694 18.9799C58.9694 17.5967 58.7114 16.5026 58.1953 15.6975C57.6792 14.8717 56.8431 14.4589 55.687 14.4589C54.531 14.4589 53.5194 15.0782 52.6524 16.3168C51.7854 17.5348 51.3518 18.8354 51.3518 20.2185C51.3518 21.6016 51.6821 22.7164 52.3427 23.5628C53.0033 24.4092 53.9736 24.8324 55.2535 24.8324ZM73.0826 12.1983C76.8191 12.1983 78.6874 14.5517 78.6874 19.2586C78.6874 21.5913 78.099 23.5009 76.9223 24.9872C75.7456 26.4736 74.187 27.2168 72.2465 27.2168C70.3266 27.2168 68.8609 26.5768 67.8493 25.2969C66.8584 23.9963 66.363 22.2622 66.363 20.0946C66.363 18.856 66.6004 17.6587 67.0752 16.5026C67.55 15.3259 68.3138 14.3143 69.3667 13.4679C70.4402 12.6215 71.6788 12.1983 73.0826 12.1983ZM68.8093 19.6301C68.8093 21.0959 69.1189 22.3551 69.7383 23.408C70.3576 24.4608 71.2246 24.9872 72.3394 24.9872C73.4748 24.9872 74.3728 24.5331 75.0334 23.6247C75.7147 22.6958 76.0553 21.3849 76.0553 19.6921C76.0553 16.1413 74.9921 14.366 72.8658 14.366C71.5446 14.366 70.533 14.8821 69.8312 15.9142C69.1499 16.9258 68.8093 18.1644 68.8093 19.6301Z" fill="#0325FF"/>
<path d="M1 33C21.4056 36.601 39.7633 38.0267 60.4821 38.0267C73.1215 38.0267 83.7407 33 96.5 33" stroke="#FFDE03" strokeWidth="3"/>
</svg>

<Search/>
    <h5 className="text-red font-urbanist mt-8">Explore</h5>
    <div className="flex">
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
    </div>


    <h5 >Get your perfect event space stress free</h5>

    <p className="text-[16px]">Choose from our range of spaces,for all 
kinds of events, meetings, and creative 
collaborations.</p>

<div className="bg-brandyellow p-4 border-t-2 space-y-4 rounded-md">
 <h5 className="font-semibold">Try listing your space</h5>

 <p className="font-semibold">Increase your revenue, visibility to a
wide range of customers and unlock
new opportunities by listing your 
space with us.</p>

<button className="bg-brandblue p-2 text-white px-4">LEARN MORE</button>
</div>

        </div>
        </>
    )
}
