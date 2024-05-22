import { useEffect, useRef } from "react"

export const AutonomyEngineerIcon = ({ size = 10 }: { size: number }) => {
    /*
        sm  640px
        md  768px
        lg  1024px
        xl  1280px
        2xl 1536px
    */
    const svgRef = useRef<SVGSVGElement>(null);

    // Function to update SVG size based on screen width
    const updateSvgSize = () => {
        const width = window.innerWidth;
        if (width > 1280) {
            svgRef.current?.setAttribute("width", `${size}px`);
            svgRef.current?.setAttribute("height", `${size}px`);
        } else if (width > 1024) {
            svgRef.current?.setAttribute("width", `${size - 20}px`);
            svgRef.current?.setAttribute("height", `${size - 20}px`);
        } else if (width > 768) {
            svgRef.current?.setAttribute("width", `${size - 30}px`);
            svgRef.current?.setAttribute("height", `${size - 30}px`);
        } else {
            svgRef.current?.setAttribute("width", `${size - 40}px`);
            svgRef.current?.setAttribute("height", `${size - 40}px`);
        }
    };

    // Use useEffect to add event listener for window resize
    useEffect(() => {
        // Call the updateSvgSize function when component mounts
        updateSvgSize();

        // Add event listener for window resize
        window.addEventListener("resize", updateSvgSize);

        // Remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", updateSvgSize);
        };
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    return (
        <svg ref={svgRef} viewBox="0 0 120 102" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M113.102 85.625H72.5668C71.1495 85.625 70.0156 86.7589 70.0156 88.1762V99.3258C70.0156 100.743 71.1495 101.877 72.5668 101.877H113.102C114.52 101.877 115.653 100.743 115.653 99.3258V88.1762C115.653 86.7589 114.52 85.625 113.102 85.625ZM114.236 99.3258C114.236 99.9872 113.764 100.46 113.102 100.46H72.5668C71.9054 100.46 71.4329 99.9872 71.4329 99.3258V88.1762C71.4329 87.5148 71.9054 87.0423 72.5668 87.0423H113.102C113.764 87.0423 114.236 87.5148 114.236 88.1762V99.3258Z" fill="currentColor" />
            <path d="M98.5511 89.8757C98.1732 89.6867 97.7952 89.7812 97.6062 90.0646C97.4172 90.4426 97.5117 90.8205 97.7952 91.0095L101.953 93.5607L97.7952 96.3009C97.4172 96.4898 97.3228 96.9623 97.6062 97.2457C97.7007 97.4347 97.9842 97.6237 98.1732 97.6237C98.2676 97.6237 98.4566 97.6237 98.5511 97.5292L103.653 94.3166C103.842 94.2221 104.031 93.9387 104.031 93.7497C104.031 93.5607 103.937 93.2772 103.653 93.1827L98.5511 89.8757Z" fill="currentColor" />
            <path d="M88.1576 90.1604C87.9686 89.7825 87.4962 89.688 87.2127 89.9715L82.1104 93.1841C81.9214 93.2785 81.7324 93.562 81.7324 93.751C81.7324 93.94 81.8269 94.2234 82.1104 94.3179L87.2127 97.5305C87.3072 97.625 87.4962 97.625 87.5907 97.625C87.8742 97.625 88.0631 97.5305 88.1576 97.247C88.3466 96.8691 88.2521 96.4911 87.9686 96.3022L83.8112 93.751L87.9686 91.1998C88.3466 90.9163 88.4411 90.4439 88.1576 90.1604Z" fill="currentColor" />
            <path d="M94.9606 88.1767C94.5827 88.0822 94.2047 88.1767 94.0157 88.5546L90.4252 98.1924C90.3307 98.5704 90.4252 98.9483 90.8031 99.1373C90.8976 99.1373 90.9921 99.1373 91.0866 99.1373C91.3701 99.1373 91.6535 98.9483 91.748 98.6648L95.4331 89.0271C95.5276 88.6491 95.3386 88.2711 94.9606 88.1767Z" fill="currentColor" />
            <path d="M60.4724 94.8845H56.315L53.1024 82.0341H91.8425C93.9213 82.0341 95.7165 80.3333 95.7165 78.16V27.0419C97.5118 26.853 99.2126 26.1915 100.724 25.1522L102.614 27.7034C102.709 27.8923 102.992 27.9868 103.181 27.9868C103.37 27.9868 103.465 27.8923 103.654 27.7978C103.937 27.5144 104.031 27.1364 103.748 26.7585L101.858 24.2073C103.843 22.5065 105.165 20.2388 105.638 17.5931L108.756 17.9711H108.85C109.228 17.9711 109.512 17.6876 109.512 17.3097C109.606 16.9317 109.323 16.5537 108.945 16.5537L105.827 16.1758C106.016 13.5301 105.354 10.9789 103.843 8.80571L106.394 6.91595C106.677 6.63249 106.772 6.25453 106.488 5.87658C106.205 5.59312 105.827 5.49863 105.449 5.78209L102.898 7.67186C101.197 5.6876 98.9291 4.36477 96.2835 3.89233L96.6614 0.774218C96.7559 0.396265 96.4724 0.0183132 96.0945 0.0183132C95.7165 -0.076175 95.3386 0.207289 95.3386 0.585242L94.9606 3.70335C92.315 3.51438 89.7638 4.17579 87.5905 5.6876L85.7008 3.13642C85.4173 2.85296 85.0394 2.75847 84.6614 3.04193C84.3779 3.3254 84.2835 3.70335 84.5669 4.0813L86.4567 6.63249C84.4724 8.33327 83.1496 10.601 82.6772 13.2467L79.5591 12.8687C79.1811 12.7742 78.8031 13.0577 78.8031 13.4356C78.7087 13.8136 78.9921 14.1915 79.3701 14.1915L82.4882 14.5695C82.3937 15.4199 82.4882 16.2703 82.5827 17.0262H3.87402C1.79528 17.0262 0 18.727 0 20.9002V78.16C0 80.2388 1.70079 82.0341 3.87402 82.0341H42.6142L39.4016 94.8845H35.2441C33.3543 94.8845 31.748 96.4907 31.748 98.3805C31.748 100.27 33.3543 101.877 35.2441 101.877H60.5669C62.4567 101.877 64.063 100.27 64.063 98.3805C63.9685 96.3963 62.3622 94.8845 60.4724 94.8845ZM83.9055 14.0971C84.2835 11.3569 85.7008 8.99469 87.874 7.2939C89.6693 5.87658 91.8425 5.21516 94.1102 5.21516C94.5827 5.21516 94.9606 5.21516 95.4331 5.30965C98.1732 5.6876 100.535 7.10493 102.142 9.27815C103.843 11.4514 104.504 14.0971 104.126 16.8372C103.748 19.5774 102.331 21.9396 100.157 23.6404C98.5512 24.8687 96.6614 25.6246 94.6772 25.7191C94.0157 25.8136 93.2598 25.7191 92.5984 25.6246C91.6535 25.5301 90.8031 25.2467 89.9528 24.8687C89.4803 24.6797 88.9134 24.3963 88.4409 24.1128C87.685 23.6404 87.0236 23.0734 86.3622 22.412C86.1732 22.223 85.9843 21.9396 85.7953 21.6561C84.8504 20.4278 84.2835 19.1049 83.9055 17.5931C83.811 16.4593 83.7165 15.3254 83.9055 14.0971ZM81.7323 24.8687C81.8268 25.0577 82.1102 25.1522 82.2992 25.1522C82.4882 25.1522 82.5827 25.0577 82.7717 24.9632L84.6614 23.5459H85.7953C85.9843 23.7348 86.0787 23.8293 86.2677 24.0183C86.3622 24.1128 86.4567 24.2073 86.4567 24.2073C86.7402 24.4908 87.0236 24.6797 87.4016 24.8687C87.4961 24.9632 87.5905 24.9632 87.5905 25.0577C87.874 25.2467 88.063 25.3411 88.3465 25.5301C88.4409 25.6246 88.6299 25.6246 88.7244 25.7191C88.9134 25.8136 89.0079 25.9081 89.1024 25.9081V75.5144H6.51968V23.5459H82.2992L81.9213 23.8293C81.5433 24.1128 81.5433 24.5852 81.7323 24.8687ZM3.87402 80.6167C2.55118 80.6167 1.51181 79.5774 1.51181 78.2545V20.9002C1.51181 19.5774 2.55118 18.538 3.87402 18.538H82.8661C82.8661 18.6325 82.9606 18.8215 82.9606 18.9159C83.0551 19.1049 83.0551 19.1994 83.1496 19.3884C83.2441 19.5774 83.3386 19.8608 83.4331 20.0498C83.5276 20.2388 83.5276 20.3333 83.622 20.5222C83.7165 20.8057 83.9055 20.9947 84 21.1837C84.0945 21.2782 84.0945 21.3726 84.189 21.5616C84.2835 21.6561 84.378 21.8451 84.4724 21.9396L84.189 22.1285H5.76378C5.38583 22.1285 5.00787 22.412 5.00787 22.8845V76.2703C5.00787 76.6482 5.29134 77.0262 5.76378 77.0262H89.7638C90.1417 77.0262 90.5197 76.7427 90.5197 76.2703V26.5695C90.9921 26.664 91.3701 26.853 91.8425 26.9474L91.4646 30.0656C91.3701 30.4435 91.6535 30.8215 92.0315 30.8215H92.126C92.5039 30.8215 92.7874 30.538 92.7874 30.16L93.1654 27.0419C93.4488 27.0419 93.6378 27.0419 93.9213 27.0419H94.0157C94.0157 27.0419 94.0157 27.0419 94.1102 27.0419C94.1102 27.0419 94.1102 27.0419 94.2047 27.0419V78.16C94.2047 79.4829 93.1654 80.5222 91.8425 80.5222H52.1575H43.4646H3.87402V80.6167ZM44.0315 82.0341H51.5905L54.8031 94.8845H40.7244L44.0315 82.0341ZM60.4724 100.459H35.1496C34.0157 100.459 33.0709 99.5144 33.0709 98.3805C33.0709 97.2467 34.0157 96.3018 35.1496 96.3018H39.874H55.748H60.4724C61.6063 96.3018 62.5512 97.2467 62.5512 98.3805C62.5512 99.5144 61.6063 100.459 60.4724 100.459Z" fill="currentColor" />
            <path d="M93.1655 22.1286C93.449 22.1286 93.7325 22.2231 94.0159 22.2231C94.2994 22.2231 94.5829 22.2231 94.9608 22.1286C96.7561 21.9396 98.2679 20.9948 99.4018 19.5774C99.4962 19.4829 99.5907 19.3885 99.5907 19.294C99.6852 19.105 99.8742 18.916 99.9687 18.727C100.063 18.6325 100.158 18.5381 100.158 18.3491C100.252 18.1601 100.347 17.8766 100.441 17.6877C100.441 17.5932 100.536 17.4987 100.63 17.3097C100.725 17.0262 100.819 16.6483 100.819 16.3648C100.819 16.2703 100.819 16.2703 100.819 16.1759C100.914 15.7979 100.914 15.4199 100.914 15.042C100.914 14.9475 100.914 14.853 100.914 14.853C100.914 14.7585 100.914 14.664 100.914 14.5696C100.914 14.4751 100.914 14.2861 100.914 14.1916C100.914 14.0971 100.914 14.0971 100.914 14.0026C100.914 13.8136 100.819 13.6247 100.819 13.5302C100.63 12.6798 100.158 11.9239 99.6852 11.168C98.5514 9.75066 96.9451 8.80577 95.1498 8.6168C91.4647 8.14436 88.0632 10.6955 87.4962 14.4751C87.3073 15.7034 87.4962 16.9318 87.9687 17.9711C88.7246 20.3333 90.8033 21.8451 93.1655 22.1286ZM88.8191 14.7585C89.197 12.1129 91.4647 10.1286 94.1104 10.1286C94.2994 10.1286 94.5829 10.1286 94.8663 10.2231C96.2836 10.4121 97.512 11.168 98.4569 12.3018C99.3073 13.4357 99.6852 14.853 99.4962 16.2703C99.2128 18.6325 97.323 20.5223 94.8663 20.9003C94.3939 20.9948 93.9214 20.9948 93.449 20.9003C91.5592 20.6168 89.9529 19.4829 89.197 17.6877C88.8191 16.6483 88.6301 15.7034 88.8191 14.7585Z" fill="currentColor" />
            <path d="M109.512 62.0977C109.512 61.7198 109.228 61.3418 108.756 61.3418C108.378 61.3418 108 61.6253 108 62.0977V71.9245C108 72.3024 108.283 72.6804 108.756 72.6804C109.134 72.6804 109.512 72.3969 109.512 71.9245V62.0977Z" fill="currentColor" />
            <path d="M108.756 79.1053C109.134 79.1053 109.512 78.8218 109.512 78.3494V75.1368C109.512 74.7588 109.228 74.3809 108.756 74.3809C108.378 74.3809 108 74.6643 108 75.1368V78.3494C108.094 78.7273 108.378 79.1053 108.756 79.1053Z" fill="currentColor" />
            <path d="M63.9688 6.6334C64.0633 6.72789 64.2523 6.82237 64.4412 6.82237C64.6302 6.82237 64.8192 6.72789 64.9137 6.6334C65.1971 6.34993 65.1971 5.87749 64.9137 5.59403L63.5908 4.27119C63.3074 3.98773 62.8349 3.98773 62.5515 4.27119C62.268 4.55466 62.268 5.0271 62.5515 5.31056L63.9688 6.6334Z" fill="currentColor" />
            <path d="M68.315 10.9791C68.4095 11.0736 68.5984 11.1681 68.7874 11.1681C68.9764 11.1681 69.1654 11.0736 69.2599 10.9791C69.5433 10.6956 69.5433 10.2232 69.2599 9.93973L67.937 8.6169C67.6536 8.33343 67.1811 8.33343 66.8977 8.6169C66.6142 8.90036 66.6142 9.3728 66.8977 9.65626L68.315 10.9791Z" fill="currentColor" />
            <path d="M63.1184 11.1681C63.3074 11.1681 63.4964 11.0736 63.5908 10.9791L64.9137 9.65626C65.1971 9.3728 65.1971 8.90036 64.9137 8.6169C64.6302 8.33343 64.1578 8.33343 63.8743 8.6169L62.5515 9.93973C62.268 10.2232 62.268 10.6956 62.5515 10.9791C62.8349 11.0736 62.9294 11.1681 63.1184 11.1681Z" fill="currentColor" />
            <path d="M67.5593 6.82237C67.7483 6.82237 67.9373 6.72789 68.0318 6.6334L69.3546 5.31056C69.6381 5.0271 69.6381 4.55466 69.3546 4.27119C69.0711 3.98773 68.5987 3.98773 68.3152 4.27119L66.9924 5.59403C66.7089 5.87749 66.7089 6.34993 66.9924 6.6334C67.1814 6.72789 67.3703 6.82237 67.5593 6.82237Z" fill="currentColor" />
            <path d="M7.46461 87.1364C7.18115 86.853 6.70871 86.853 6.42524 87.1364C6.14178 87.4199 6.14178 87.8923 6.42524 88.1758L7.74808 89.4986C7.84257 89.5931 8.03154 89.6876 8.22052 89.6876C8.4095 89.6876 8.59847 89.5931 8.69296 89.4986C8.97643 89.2152 8.97643 88.7427 8.69296 88.4593L7.46461 87.1364Z" fill="currentColor" />
            <path d="M11.9055 91.4821C11.6221 91.1987 11.1496 91.1987 10.8662 91.4821C10.5827 91.7656 10.5827 92.238 10.8662 92.5215L12.189 93.8443C12.2835 93.9388 12.4725 94.0333 12.6614 94.0333C12.8504 94.0333 13.0394 93.9388 13.1339 93.8443C13.4173 93.5609 13.4173 93.0884 13.1339 92.805L11.9055 91.4821Z" fill="currentColor" />
            <path d="M7.84256 91.4835L6.51973 92.8064C6.23626 93.0898 6.23626 93.5623 6.51973 93.8457C6.61422 93.9402 6.80319 94.0347 6.99217 94.0347C7.18114 94.0347 7.37012 93.9402 7.46461 93.8457L8.78744 92.5229C9.07091 92.2394 9.07091 91.767 8.78744 91.4835C8.59847 91.2946 8.12603 91.2946 7.84256 91.4835Z" fill="currentColor" />
            <path d="M12.189 87.1364L10.8662 88.4593C10.5827 88.7427 10.5827 89.2152 10.8662 89.4986C10.9607 89.5931 11.1496 89.6876 11.3386 89.6876C11.5276 89.6876 11.7166 89.5931 11.811 89.4986L13.1339 88.1758C13.4173 87.8923 13.4173 87.4199 13.1339 87.1364C12.9449 86.853 12.4725 86.853 12.189 87.1364Z" fill="currentColor" />
            <path d="M112.913 7.76621C113.008 7.8607 113.197 7.95519 113.386 7.95519C113.575 7.95519 113.764 7.8607 113.858 7.76621C114.141 7.48274 114.141 7.0103 113.858 6.72684L112.535 5.404C112.252 5.12054 111.779 5.12054 111.496 5.404C111.212 5.68747 111.212 6.15991 111.496 6.44337L112.913 7.76621Z" fill="currentColor" />
            <path d="M117.355 12.1119C117.449 12.2064 117.638 12.3009 117.827 12.3009C118.016 12.3009 118.205 12.2064 118.299 12.1119C118.583 11.8284 118.583 11.356 118.299 11.0725L116.977 9.74971C116.693 9.46624 116.221 9.46624 115.937 9.74971C115.654 10.0332 115.654 10.5056 115.937 10.7891L117.355 12.1119Z" fill="currentColor" />
            <path d="M112.063 12.3009C112.252 12.3009 112.441 12.2064 112.535 12.1119L113.858 10.7891C114.141 10.5056 114.141 10.0332 113.858 9.74971C113.575 9.46624 113.102 9.46624 112.819 9.74971L111.496 11.0725C111.212 11.356 111.212 11.8284 111.496 12.1119C111.779 12.3009 111.968 12.3009 112.063 12.3009Z" fill="currentColor" />
            <path d="M116.504 7.95519C116.693 7.95519 116.882 7.8607 116.977 7.76621L118.299 6.44337C118.583 6.15991 118.583 5.68747 118.299 5.404C118.016 5.12054 117.544 5.12054 117.26 5.404L115.937 6.72684C115.654 7.0103 115.654 7.48274 115.937 7.76621C116.126 7.95518 116.315 7.95519 116.504 7.95519Z" fill="currentColor" />
            <path d="M98.7402 51.8928C98.7402 53.5936 100.063 54.9164 101.764 54.9164C103.465 54.9164 104.787 53.5936 104.787 51.8928C104.787 50.192 103.465 48.8691 101.764 48.8691C100.063 48.8691 98.7402 50.192 98.7402 51.8928ZM103.276 51.8928C103.276 52.7432 102.52 53.4991 101.669 53.4991C100.819 53.4991 100.063 52.7432 100.063 51.8928C100.063 51.0424 100.819 50.2865 101.669 50.2865C102.614 50.2865 103.276 50.9479 103.276 51.8928Z" fill="currentColor" />
            <path d="M38.8347 14.2855C40.5354 14.2855 41.8583 12.9627 41.8583 11.2619C41.8583 9.56112 40.5354 8.23828 38.8347 8.23828C37.1339 8.23828 35.811 9.56112 35.811 11.2619C35.811 12.9627 37.1339 14.2855 38.8347 14.2855ZM38.8347 9.75009C39.685 9.75009 40.441 10.506 40.441 11.3564C40.441 12.2068 39.685 12.9627 38.8347 12.9627C37.9843 12.9627 37.2284 12.2068 37.2284 11.3564C37.2284 10.4115 37.8898 9.75009 38.8347 9.75009Z" fill="currentColor" />
            <path d="M113.103 36.3965C113.103 36.0186 112.819 35.6406 112.347 35.6406H101.669C101.292 35.6406 100.914 35.9241 100.914 36.3965C100.914 36.869 101.197 37.1524 101.669 37.1524H112.347C112.725 37.0579 113.103 36.7745 113.103 36.3965Z" fill="currentColor" />
            <path d="M115.842 37.0567H119.244C119.622 37.0567 120 36.7733 120 36.3008C120 35.8284 119.716 35.5449 119.244 35.5449H115.842C115.464 35.5449 115.086 35.8284 115.086 36.3008C115.086 36.7733 115.464 37.0567 115.842 37.0567Z" fill="currentColor" />
            <path d="M119.244 39.3242H111.874C111.496 39.3242 111.118 39.6077 111.118 40.0801C111.118 40.5526 111.402 40.836 111.874 40.836H119.244C119.622 40.836 120 40.5526 120 40.0801C120 39.6077 119.717 39.3242 119.244 39.3242Z" fill="currentColor" />
            <path d="M109.417 39.9864C109.417 39.6084 109.134 39.2305 108.662 39.2305H106.299C105.921 39.2305 105.543 39.5139 105.543 39.9864C105.543 40.4588 105.827 40.7423 106.299 40.7423H108.662C109.04 40.7423 109.417 40.4588 109.417 39.9864Z" fill="currentColor" />
            <path d="M15.5906 8.52153C15.5906 8.89948 15.874 9.27744 16.3465 9.27744H26.9292C27.3071 9.27744 27.6851 8.99397 27.6851 8.52153C27.6851 8.14358 27.4016 7.76562 26.9292 7.76562H16.252C15.874 7.86011 15.5906 8.14358 15.5906 8.52153Z" fill="currentColor" />
            <path d="M9.35454 9.27744H12.7561C13.1341 9.27744 13.512 8.99397 13.512 8.52153C13.512 8.14358 13.2286 7.76562 12.7561 7.76562H9.35454C8.97658 7.76562 8.59863 8.04909 8.59863 8.52153C8.59863 8.99397 8.97658 9.27744 9.35454 9.27744Z" fill="currentColor" />
            <path d="M9.35454 5.59384H16.7246C17.1026 5.59384 17.4805 5.31038 17.4805 4.83794C17.4805 4.3655 17.1971 4.08203 16.7246 4.08203H9.35454C8.97658 4.08203 8.59863 4.3655 8.59863 4.83794C8.59863 5.31038 8.97658 5.59384 9.35454 5.59384Z" fill="currentColor" />
            <path d="M19.9371 5.59384H22.2993C22.6772 5.59384 23.0552 5.31038 23.0552 4.83794C23.0552 4.3655 22.7717 4.08203 22.2993 4.08203H19.9371C19.5591 4.08203 19.1812 4.3655 19.1812 4.83794C19.1812 5.31038 19.5591 5.59384 19.9371 5.59384Z" fill="currentColor" />
            <path d="M9.16528 26.9473V39.3253C9.16528 39.7032 9.44875 40.0812 9.92119 40.0812H85.7952C86.1732 40.0812 86.5511 39.7977 86.5511 39.3253V26.9473C86.5511 26.5694 86.2676 26.1914 85.7952 26.1914H9.8267C9.44875 26.2859 9.16528 26.5694 9.16528 26.9473ZM10.5826 27.7032H85.0393V38.6638H10.5826V27.7032Z" fill="currentColor" />
            <path d="M9.82695 56.4281H32.4096C32.7876 56.4281 33.1655 56.1446 33.1655 55.6722V43.3887C33.1655 43.0108 32.8821 42.6328 32.4096 42.6328H9.82695C9.449 42.6328 9.07104 42.9163 9.07104 43.3887V55.7667C9.16553 56.1446 9.449 56.4281 9.82695 56.4281ZM10.5829 44.0501H31.7482V55.0108H10.5829V44.0501Z" fill="currentColor" />
            <path d="M59.0551 56.4281C59.4331 56.4281 59.811 56.1446 59.811 55.6722V43.3887C59.811 43.0108 59.5276 42.6328 59.0551 42.6328H36.4725C36.0945 42.6328 35.7166 42.9163 35.7166 43.3887V55.7667C35.7166 56.1446 36 56.5226 36.4725 56.5226H59.0551V56.4281ZM37.2284 44.0501H58.3937V55.0108H37.2284V44.0501Z" fill="currentColor" />
            <path d="M85.7009 42.6328H63.1182C62.7403 42.6328 62.3623 42.9163 62.3623 43.3887V55.7667C62.3623 56.1446 62.6458 56.5226 63.1182 56.5226H85.7009C86.0788 56.5226 86.4568 56.2391 86.4568 55.7667V43.3887C86.4568 43.0108 86.1733 42.6328 85.7009 42.6328ZM85.0395 55.0108H63.8741V44.0501H85.0395V55.0108Z" fill="currentColor" />
            <path d="M45.7325 59.0742H9.82695C9.449 59.0742 9.07104 59.3577 9.07104 59.8301V72.2081C9.07104 72.586 9.35451 72.964 9.82695 72.964H45.7325C46.1104 72.964 46.4884 72.6805 46.4884 72.2081V59.8301C46.4884 59.4522 46.1104 59.0742 45.7325 59.0742ZM45.071 71.4522H10.5829V60.4915H45.071V71.4522Z" fill="currentColor" />
            <path d="M85.7007 59.0742H49.7952C49.4173 59.0742 49.0393 59.3577 49.0393 59.8301V72.2081C49.0393 72.586 49.3228 72.964 49.7952 72.964H85.7007C86.0787 72.964 86.4566 72.6805 86.4566 72.2081V59.8301C86.4566 59.4522 86.1732 59.0742 85.7007 59.0742ZM85.0393 71.4522H50.5511V60.4915H85.0393V71.4522Z" fill="currentColor" />
        </svg>

    )
}
