import { useEffect, useRef } from "react"

export const DesignEngineerIcon = ({ size }: { size: number }) => {
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
        <svg ref={svgRef} viewBox="0 0 112 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M111.167 28.084H99.3709C98.9934 28.084 98.616 28.3671 98.616 28.8389V119.245C98.616 119.622 98.8991 120 99.3709 120H111.167C111.545 120 111.922 119.717 111.922 119.245V28.7446C111.922 28.3671 111.545 28.084 111.167 28.084ZM100.032 118.49V29.4995H110.412V35.5392H105.316C104.939 35.5392 104.561 35.8223 104.561 36.2941C104.561 36.6716 104.844 37.0491 105.316 37.0491H110.412V42.9944H106.826C106.449 42.9944 106.071 43.2775 106.071 43.7493C106.071 44.2212 106.354 44.5043 106.826 44.5043H110.412V50.7327H105.316C104.939 50.7327 104.561 51.0158 104.561 51.4876C104.561 51.8651 104.844 52.2426 105.316 52.2426H110.412V58.0935H106.826C106.449 58.0935 106.071 58.3766 106.071 58.8484C106.071 59.3203 106.354 59.6034 106.826 59.6034H110.412V65.8318H105.316C104.939 65.8318 104.561 66.1149 104.561 66.5867C104.561 66.9642 104.844 67.3417 105.316 67.3417H110.412V73.1926H106.826C106.449 73.1926 106.071 73.4757 106.071 73.9475C106.071 74.325 106.354 74.7025 106.826 74.7025H110.412V80.9309H105.316C104.939 80.9309 104.561 81.214 104.561 81.6858C104.561 82.0633 104.844 82.4408 105.316 82.4408H110.412V88.4804H106.826C106.449 88.4804 106.071 88.7635 106.071 89.2354C106.071 89.7072 106.354 89.9903 106.826 89.9903H110.412V96.2187H105.316C104.939 96.2187 104.561 96.5018 104.561 96.9737C104.561 97.3512 104.844 97.7286 105.316 97.7286H110.412V103.768H106.826C106.449 103.768 106.071 104.051 106.071 104.523C106.071 104.901 106.354 105.278 106.826 105.278H110.412V111.507H105.316C104.939 111.507 104.561 111.79 104.561 112.262C104.561 112.639 104.844 113.016 105.316 113.016H110.412V119.15H100.032V118.49Z" fill="currentColor" />
            <path d="M83.7056 39.0307V91.1226C83.7056 93.8593 85.9704 96.1242 88.7071 96.1242H88.9903C91.727 96.1242 93.9918 93.8593 93.9918 91.1226V87.4422V82.4406V39.0307C93.9918 38.9363 93.9918 38.9363 93.9918 38.8419C93.9918 38.6532 93.9918 38.5588 93.9918 38.3701L89.5565 28.4613C89.3677 27.9895 88.5184 27.9895 88.2353 28.4613L83.7999 38.3701C83.7056 38.5588 83.7056 38.6532 83.7999 38.8419C83.7056 38.9363 83.7056 38.9363 83.7056 39.0307ZM85.1211 83.1012H92.4819V86.6873H85.1211V83.1012ZM92.5763 81.6857H85.2155V39.6913H92.5763V81.6857ZM88.9903 94.6143H88.7071C86.7254 94.6143 85.1211 93.01 85.1211 91.0282V88.1028H92.4819V91.1226C92.5763 93.1044 90.972 94.6143 88.9903 94.6143ZM88.8959 30.5374L92.3876 38.2757H85.4986L88.8959 30.5374Z" fill="currentColor" />
            <path d="M88.8958 73.6655C89.2733 73.6655 89.6508 73.3824 89.6508 72.9106V69.1358C89.6508 68.7583 89.3677 68.3809 88.8958 68.3809C88.5183 68.3809 88.1409 68.664 88.1409 69.1358V72.9106C88.1409 73.3824 88.424 73.6655 88.8958 73.6655Z" fill="currentColor" />
            <path d="M88.8958 64.228C89.2733 64.228 89.6508 63.9449 89.6508 63.4731V59.6983C89.6508 59.3208 89.3677 58.9434 88.8958 58.9434C88.5183 58.9434 88.1409 59.2265 88.1409 59.6983V63.4731C88.1409 63.8506 88.424 64.228 88.8958 64.228Z" fill="currentColor" />
            <path d="M88.8958 54.6968C89.2733 54.6968 89.6508 54.4137 89.6508 53.9418V50.1671C89.6508 49.7896 89.3677 49.4121 88.8958 49.4121C88.5183 49.4121 88.1409 49.6952 88.1409 50.1671V53.9418C88.1409 54.4137 88.424 54.6968 88.8958 54.6968Z" fill="currentColor" />
            <path d="M16.2314 46.9581C16.3258 46.9581 16.4202 46.9581 16.4202 46.9581C16.7033 46.9581 16.9864 46.7693 17.0807 46.4862C17.1751 46.1087 16.9864 45.7312 16.6089 45.5425C15.8539 45.2594 15.1933 44.9763 14.4384 44.6932C14.0609 44.5044 13.6834 44.6932 13.4947 45.0707C13.306 45.4481 13.4947 45.8256 13.8722 46.0144C14.7215 46.3918 15.4765 46.6749 16.2314 46.9581Z" fill="currentColor" />
            <path d="M0.754956 23.933C1.13243 23.933 1.41554 23.6499 1.50991 23.2724C1.60428 21.6681 1.79302 20.0638 2.1705 18.5539C2.26487 18.1765 2.07613 17.799 1.69865 17.7046C1.2268 17.5159 0.849325 17.799 0.754956 18.1765C0.377478 19.7807 0.0943694 21.4794 0 23.178C0 23.5555 0.283109 23.8386 0.754956 23.933Z" fill="currentColor" />
            <path d="M10.8524 5.62359C10.9468 5.62359 11.1355 5.62359 11.2299 5.52922C12.551 4.58553 13.9666 3.83057 15.3821 3.26436C15.7596 3.07562 15.9483 2.69814 15.7596 2.32066C15.5709 1.94318 15.1934 1.75444 14.8159 1.94318C13.306 2.5094 11.7961 3.35873 10.4749 4.30242C10.1918 4.49116 10.0974 4.96301 10.2862 5.24611C10.3806 5.52922 10.6637 5.62359 10.8524 5.62359Z" fill="currentColor" />
            <path d="M2.73677 34.4062C2.83114 34.4062 2.92551 34.4062 3.01988 34.3118C3.39736 34.1231 3.49173 33.7456 3.39736 33.3681C2.73677 31.9526 2.26492 30.3483 1.88744 28.8384C1.79308 28.4609 1.4156 28.1778 1.03812 28.2722C0.660643 28.3666 0.377534 28.744 0.471903 29.1215C0.849381 30.7258 1.32123 32.4245 2.07618 33.9344C2.26492 34.3118 2.45366 34.4062 2.73677 34.4062Z" fill="currentColor" />
            <path d="M3.30301 13.457C3.39738 13.5513 3.49175 13.5513 3.68049 13.5513C3.9636 13.5513 4.15234 13.457 4.34108 13.1739C5.09603 11.7583 6.03973 10.4371 7.07779 9.30471C7.3609 9.0216 7.26653 8.54975 6.98342 8.26664C6.60595 7.98353 6.1341 8.0779 5.94536 8.36101C4.81293 9.68218 3.86923 11.0034 3.01991 12.5133C2.83117 12.8907 2.92554 13.2682 3.30301 13.457Z" fill="currentColor" />
            <path d="M20.8558 1.66072H20.9502C22.5544 1.47198 24.1587 1.37761 25.6686 1.47198C26.0461 1.47198 26.4236 1.18887 26.4236 0.811396C26.4236 0.433918 26.1405 0.0564401 25.763 0.0564401C24.0643 -0.0379293 22.3657 -0.0379293 20.667 0.245179C20.3839 0.339548 20.1008 0.717026 20.1008 1.0945C20.1952 1.47198 20.4783 1.66072 20.8558 1.66072Z" fill="currentColor" />
            <path d="M31.3309 2.60499C32.8408 3.07683 34.2563 3.73742 35.6719 4.58674C35.7662 4.68111 35.955 4.68111 36.0493 4.68111C36.3324 4.68111 36.5212 4.58674 36.6156 4.30364C36.8043 3.92616 36.7099 3.54868 36.3324 3.35994C34.9169 2.51062 33.3126 1.75566 31.7083 1.28381C31.3309 1.18944 30.9534 1.37818 30.7646 1.75566C30.7646 2.13314 30.9534 2.51062 31.3309 2.60499Z" fill="currentColor" />
            <path d="M9.3426 42.9955C9.53133 42.9955 9.72007 42.9011 9.90881 42.7124C10.1919 42.4293 10.0976 41.9574 9.81444 41.6743C8.58764 40.6363 7.45521 39.5038 6.41714 38.277C6.13403 37.9939 5.75656 37.8996 5.37908 38.1827C5.09597 38.4658 5.0016 38.8432 5.28471 39.2207C6.32277 40.5419 7.54958 41.7687 8.87075 42.8068C8.96512 42.9011 9.15386 42.9955 9.3426 42.9955Z" fill="currentColor" />
            <path d="M43.1268 11.8527C43.2212 12.0414 43.5043 12.1358 43.693 12.1358C43.7874 12.1358 43.9761 12.1358 44.0705 12.0414C44.3536 11.8527 44.448 11.3808 44.2592 11.0977C43.3156 9.68218 42.2775 8.36101 41.0507 7.13421C40.7676 6.8511 40.2957 6.8511 40.0126 7.13421C39.7295 7.41731 39.7295 7.88916 40.0126 8.17227C41.2394 9.21033 42.2775 10.5315 43.1268 11.8527Z" fill="currentColor" />
            <path d="M46.241 19.2125C46.3354 19.5899 46.6185 19.7787 46.9016 19.7787C46.996 19.7787 46.996 19.7787 47.0904 19.7787C47.4678 19.6843 47.7509 19.3068 47.6566 18.9294C47.4678 18.1744 47.2791 17.3251 46.996 16.5701C46.9016 16.1926 46.4298 16.0039 46.0523 16.0983C45.6748 16.1926 45.4861 16.6645 45.5804 17.042C45.8636 17.7025 46.0523 18.4575 46.241 19.2125Z" fill="currentColor" />
            <path d="M68.701 109.619H82.6677C83.0452 109.619 83.4226 109.336 83.4226 108.864C83.4226 108.487 83.1395 108.109 82.6677 108.109H68.701C68.3235 108.109 67.946 108.392 67.946 108.864C68.0404 109.242 68.3235 109.619 68.701 109.619Z" fill="currentColor" />
            <path d="M93.992 119.056V118.961C93.0483 115.753 92.1047 112.544 91.0666 109.43C88.8017 102.069 82.0071 97.9168 73.5139 98.5774C72.004 98.6717 70.4941 98.7661 68.9841 98.8605C69.1729 98.483 69.456 98.0111 69.6447 97.6337C69.6447 97.6337 69.6447 97.6337 69.6447 97.5393C69.6447 97.4449 69.6447 97.4449 69.6447 97.3506V97.2562C69.6447 97.1618 69.6447 97.1618 69.6447 97.0675V96.9731V96.8787L67.7573 94.0476V87.6305C70.4941 85.1769 72.7589 81.6852 74.1745 77.6273H74.2688C76.345 77.6273 77.9492 74.5132 77.9492 70.4553C77.9492 67.058 76.9112 64.3213 75.3069 63.5663V63.3776C75.59 61.1127 75.8731 58.8478 76.0619 56.583C76.7224 46.6742 74.0801 45.353 69.0785 43.8431C68.701 43.7487 68.3236 43.56 67.8517 43.4656C63.7938 42.1444 59.5472 41.8613 56.7161 41.8613C53.885 41.8613 49.7328 42.1444 45.5805 43.4656C45.203 43.56 44.7312 43.7487 44.3537 43.8431C39.2578 45.4474 36.7098 46.6742 37.3704 56.583C37.5591 58.8478 37.8422 61.2071 38.1253 63.3776V63.5663C36.5211 64.3213 35.483 67.058 35.483 70.4553C35.483 74.6075 37.1816 77.7217 39.2578 77.6273C40.6733 81.7796 42.8438 85.1769 45.6749 87.6305V94.0476L43.7875 96.8787V96.9731C43.7875 96.9731 43.7875 97.0675 43.6931 97.0675V97.1618V97.2562C43.6931 97.3506 43.6931 97.3506 43.6931 97.3506V97.4449C43.8819 97.9168 44.165 98.2943 44.3537 98.6717C42.8438 98.5774 41.3339 98.483 39.9184 98.3886C31.3307 97.728 24.6305 101.88 22.3656 109.241C21.4219 112.355 20.3839 115.564 19.4402 118.772V118.867V118.961C19.4402 119.056 19.4402 119.056 19.4402 119.15V119.244L19.5346 119.339L19.6289 119.433L19.7233 119.527L19.8177 119.622C19.912 119.622 19.912 119.622 20.0064 119.622H93.3315C93.4258 119.622 93.4258 119.622 93.5202 119.622C93.5202 119.622 93.6146 119.622 93.6146 119.527C93.6146 119.527 93.7089 119.527 93.7089 119.433L93.8033 119.339L93.8977 119.244V119.15C93.8977 119.056 93.8977 119.056 93.8977 118.961C93.992 119.15 93.992 119.15 93.992 119.056ZM44.7312 45.1643C45.1087 45.0699 45.5805 44.8812 45.958 44.7868C49.0722 43.7487 52.7526 43.2769 56.6217 43.2769C60.4909 43.2769 64.1713 43.8431 67.2855 44.7868C67.7573 44.8812 68.1348 45.0699 68.5123 45.1643C72.9477 46.4854 75.1182 47.2404 74.5519 56.4886C74.4576 57.5267 74.3632 58.5647 74.2688 59.6028C73.5139 57.3379 72.2871 54.9787 70.2109 54.7899C66.8136 54.4125 57.8485 54.5068 57.4711 54.5068C57.4711 54.5068 53.6019 54.7899 49.544 50.7321C49.3553 50.5433 49.1666 50.5433 48.9778 50.5433C48.7891 50.5433 48.6003 50.6377 48.506 50.8264C47.8454 51.6757 47.1848 53.3744 48.0341 55.073C45.8636 54.6956 42.4663 54.5068 41.2395 56.0167C40.3902 56.9604 39.7296 58.6591 39.1634 60.2634C39.069 59.0366 38.8803 57.8098 38.7859 56.4886C38.1253 47.146 40.3902 46.4854 44.7312 45.1643ZM40.2958 76.5893C40.2015 76.4005 40.1071 76.2118 39.9184 76.1174C39.824 76.1174 39.7296 76.0231 39.6352 76.0231C39.5409 76.0231 39.4465 76.0231 39.3521 76.1174C39.2578 76.2118 39.1634 76.2118 39.069 76.2118C38.1253 76.2118 36.8042 74.0413 36.8042 70.4553C36.8042 67.3411 37.8422 64.9818 38.8803 64.7931C39.1634 64.6987 39.3521 64.51 39.4465 64.2269V64.0382C39.824 62.4339 40.9564 58.2816 42.1832 56.8661C43.1269 55.7336 47.0904 56.2055 49.544 56.8661C49.8271 56.9604 50.2046 56.7717 50.3934 56.4886C50.5821 56.2055 50.4877 55.828 50.2046 55.6393C48.7891 54.5068 48.8835 53.1857 49.1666 52.4307C53.5076 56.2055 57.3767 55.9224 57.4711 55.9224C57.5654 55.9224 66.7193 55.828 70.0222 56.2055C72.1927 56.4886 73.4195 61.6789 73.7026 63.8494V63.9438C73.7026 63.9438 73.7026 64.0381 73.7026 64.1325V64.2269C73.797 64.51 73.9857 64.6987 74.2688 64.7931C75.3069 64.9818 76.345 67.3411 76.345 70.4553C76.345 74.0413 75.0238 76.2118 74.0801 76.2118C73.9857 76.2118 73.8914 76.2118 73.797 76.1174C73.6082 76.0231 73.4195 76.0231 73.2308 76.1174C73.042 76.2118 72.9477 76.4005 72.8533 76.5893C70.2109 85.1769 63.7938 90.7447 56.5274 90.7447C49.3553 90.6503 42.9382 85.1769 40.2958 76.5893ZM56.6217 92.0659C60.1134 92.0659 63.4163 90.8391 66.3418 88.7629V94.2364C66.3418 94.2364 66.3418 94.2364 66.3418 94.3307C66.3418 94.4251 66.3418 94.4251 66.3418 94.4251C66.3418 94.4251 66.3418 94.5195 66.4362 94.5195C66.4362 94.5195 66.4362 94.5195 66.4362 94.6138L68.2292 97.2562C66.4362 100.748 64.4544 103.862 62.2839 106.599L60.9627 101.125L62.9445 97.728C63.0389 97.5393 63.0389 97.2562 62.9445 96.9731C62.8501 96.7843 62.567 96.5956 62.2839 96.5956H50.9596C50.6765 96.5956 50.4877 96.69 50.299 96.9731C50.2046 97.1618 50.2046 97.4449 50.299 97.728L52.3751 101.22L51.0539 106.693C49.1666 104.334 47.0904 101.22 45.1087 97.2562L46.9017 94.5195C46.9017 94.5195 46.9017 94.5195 46.9017 94.4251C46.9017 94.4251 46.9017 94.3307 46.9961 94.3307V94.2364C46.9961 94.2364 46.9961 94.2364 46.9961 94.142V88.6686C49.8271 90.9334 53.1301 92.0659 56.6217 92.0659ZM56.6217 112.544C55.8668 111.978 54.2625 110.562 52.1864 108.203L53.6963 101.88H59.7359L61.2458 108.109C59.0754 110.468 57.3767 111.978 56.6217 112.544ZM59.8303 100.465H53.5076L52.1864 98.1999H61.1515L59.8303 100.465ZM23.5924 109.902C25.6686 103.201 31.8026 99.4267 39.7296 100.087C41.5226 100.182 43.3157 100.276 45.1087 100.37C50.4877 109.996 56.0555 113.771 56.3386 113.96C56.3386 113.96 56.3386 113.96 56.433 113.96C56.433 113.96 56.433 113.96 56.5274 113.96C56.6217 113.96 56.7161 114.054 56.8105 114.054C56.9049 114.054 56.9992 114.054 57.0936 113.96C57.0936 113.96 57.0936 113.96 57.188 113.96C57.188 113.96 57.188 113.96 57.2823 113.96C57.3767 113.865 59.6416 112.355 62.7558 108.675C64.8319 106.221 66.7193 103.39 68.5123 100.37C70.3053 100.276 72.0983 100.182 73.8914 100.087C81.724 99.5211 87.9524 103.201 90.0285 109.902C90.8779 112.733 91.8216 115.564 92.6709 118.489H20.9501C21.7994 115.564 22.7431 112.733 23.5924 109.902Z" fill="currentColor" />
            <path d="M56.6217 12.0417C56.9991 12.0417 57.3766 11.7585 57.3766 11.2867V1.0948C57.3766 0.717322 57.0935 0.339844 56.6217 0.339844C56.2442 0.339844 55.8667 0.622952 55.8667 1.0948V11.3811C55.9611 11.7585 56.2442 12.0417 56.6217 12.0417Z" fill="currentColor" />
            <path d="M56.6217 18.7406C56.9991 18.7406 57.3766 18.4575 57.3766 17.9856V14.6827C57.3766 14.3052 57.0935 13.9277 56.6217 13.9277C56.2442 13.9277 55.8667 14.2108 55.8667 14.6827V17.9856C55.9611 18.4575 56.2442 18.7406 56.6217 18.7406Z" fill="currentColor" />
            <path d="M27.5561 73.003C27.5561 72.6255 27.2729 72.248 26.8011 72.248C26.3293 72.248 26.0461 72.5312 26.0461 73.003V83.2893C26.0461 83.6667 26.3293 84.0442 26.8011 84.0442C27.2729 84.0442 27.5561 83.7611 27.5561 83.2893V73.003Z" fill="currentColor" />
            <path d="M26.8953 85.9316C26.5179 85.9316 26.1404 86.2148 26.1404 86.6866V89.9895C26.1404 90.367 26.4235 90.7445 26.8953 90.7445C27.3672 90.7445 27.6503 90.4614 27.6503 89.9895V86.6866C27.5559 86.3091 27.2728 85.9316 26.8953 85.9316Z" fill="currentColor" />
            <path d="M50.2047 30.8202C50.299 30.9146 50.4878 31.009 50.6765 31.009C50.8653 31.009 51.054 30.9146 51.1484 30.8202C51.4315 30.5371 51.4315 30.0653 51.1484 29.7822L49.7328 28.3666C49.4497 28.0835 48.9779 28.0835 48.6948 28.3666C48.4116 28.6497 48.4116 29.1216 48.6948 29.4047L50.2047 30.8202Z" fill="currentColor" />
            <path d="M54.7342 35.3515C54.8286 35.4459 55.0173 35.5402 55.2061 35.5402C55.3948 35.5402 55.5835 35.4459 55.6779 35.3515C55.961 35.0684 55.961 34.5965 55.6779 34.3134L54.2624 32.8979C53.9793 32.6148 53.5074 32.6148 53.2243 32.8979C52.9412 33.181 52.9412 33.6528 53.2243 33.9359L54.7342 35.3515Z" fill="currentColor" />
            <path d="M49.3552 35.5402C49.5439 35.5402 49.7327 35.4459 49.8271 35.3515L51.2426 33.9359C51.5257 33.6528 51.5257 33.181 51.2426 32.8979C50.9595 32.6148 50.4876 32.6148 50.2045 32.8979L48.789 34.3134C48.5059 34.5965 48.5059 35.0684 48.789 35.3515C48.9777 35.4459 49.1665 35.5402 49.3552 35.5402Z" fill="currentColor" />
            <path d="M53.8847 31.009C54.0735 31.009 54.2622 30.9146 54.3566 30.8202L55.7721 29.4047C56.0552 29.1216 56.0552 28.6497 55.7721 28.3666C55.489 28.0835 55.0172 28.0835 54.7341 28.3666L53.3185 29.7822C53.0354 30.0653 53.0354 30.5371 53.3185 30.8202C53.5073 30.9146 53.696 31.009 53.8847 31.009Z" fill="currentColor" />
            <path d="M70.022 6.94523C70.1164 7.0396 70.3052 7.13397 70.4939 7.13397C70.6826 7.13397 70.8714 7.0396 70.9657 6.94523C71.2488 6.66213 71.2488 6.19028 70.9657 5.90717L69.5502 4.49163C69.2671 4.20852 68.7952 4.20852 68.5121 4.49163C68.229 4.77474 68.229 5.24658 68.5121 5.52969L70.022 6.94523Z" fill="currentColor" />
            <path d="M74.5517 11.3802C74.6461 11.4745 74.8348 11.5689 75.0235 11.5689C75.2123 11.5689 75.401 11.4745 75.4954 11.3802C75.7785 11.0971 75.7785 10.6252 75.4954 10.3421L74.1742 9.02093C73.8911 8.73782 73.4193 8.73782 73.1362 9.02093C72.8531 9.30403 72.8531 9.77588 73.1362 10.059L74.5517 11.3802Z" fill="currentColor" />
            <path d="M69.1728 11.6633C69.3616 11.6633 69.5503 11.5689 69.6447 11.4745L71.0602 10.059C71.3433 9.77588 71.3433 9.30403 71.0602 9.02093C70.7771 8.73782 70.3053 8.73782 70.0222 9.02093L68.6066 10.4365C68.3235 10.7196 68.3235 11.1914 68.6066 11.4745C68.7954 11.5689 68.9841 11.6633 69.1728 11.6633Z" fill="currentColor" />
            <path d="M73.6081 7.13397C73.7969 7.13397 73.9856 7.0396 74.08 6.94523L75.4955 5.52969C75.7786 5.24658 75.7786 4.77474 75.4955 4.49163C75.2124 4.20852 74.7406 4.20852 74.4575 4.49163L73.0419 5.90717C72.7588 6.19028 72.7588 6.66213 73.0419 6.94523C73.2307 7.0396 73.4194 7.13397 73.6081 7.13397Z" fill="currentColor" />
            <path d="M7.64372 66.0218L6.22818 64.7006C5.94507 64.4175 5.47322 64.4175 5.19011 64.7006C4.90701 64.9837 4.90701 65.4556 5.19011 65.7387L6.60566 67.1542C6.70003 67.2486 6.88876 67.343 7.0775 67.343C7.26624 67.343 7.45498 67.2486 7.54935 67.1542C7.92683 66.7767 7.92683 66.3049 7.64372 66.0218Z" fill="currentColor" />
            <path d="M10.758 69.1342C10.4749 68.8511 10.003 68.8511 9.7199 69.1342C9.43679 69.4173 9.43679 69.8892 9.7199 70.1723L11.1354 71.5878C11.2298 71.6822 11.4185 71.7766 11.6073 71.7766C11.796 71.7766 11.9848 71.6822 12.0791 71.5878C12.3622 71.3047 12.3622 70.8329 12.0791 70.5497L10.758 69.1342Z" fill="currentColor" />
            <path d="M7.64372 70.1723C7.92683 69.8892 7.92683 69.4173 7.64372 69.1342C7.36061 68.8511 6.88876 68.8511 6.60566 69.1342L5.19011 70.5497C4.90701 70.8329 4.90701 71.3047 5.19011 71.5878C5.28448 71.6822 5.47322 71.7766 5.66196 71.7766C5.8507 71.7766 6.03944 71.6822 6.13381 71.5878L7.64372 70.1723Z" fill="currentColor" />
            <path d="M12.1735 64.7006C11.8904 64.4175 11.4185 64.4175 11.1354 64.7006L9.7199 66.0218C9.43679 66.3049 9.43679 66.7767 9.7199 67.0598C9.81427 67.1542 10.003 67.2486 10.1917 67.2486C10.3805 67.2486 10.5692 67.1542 10.6636 67.0598L12.0791 65.6443C12.4566 65.3612 12.4566 64.9837 12.1735 64.7006Z" fill="currentColor" />
            <path d="M73.1364 25.4414C71.249 25.4414 69.8335 26.9513 69.8335 28.7443C69.8335 30.6317 71.3434 32.0473 73.1364 32.0473C75.0238 32.0473 76.4394 30.5374 76.4394 28.7443C76.5337 26.9513 75.0238 25.4414 73.1364 25.4414ZM73.1364 30.7261C72.0984 30.7261 71.249 29.8768 71.249 28.8387C71.249 27.8006 72.0984 26.9513 73.1364 26.9513C74.1745 26.9513 75.0238 27.8006 75.0238 28.8387C75.1182 29.7824 74.1745 30.7261 73.1364 30.7261Z" fill="currentColor" />
            <path d="M72.4758 89.9904C72.4758 91.8778 73.9857 93.2934 75.7788 93.2934C77.6661 93.2934 79.0817 91.7835 79.0817 89.9904C79.0817 88.103 77.5718 86.6875 75.7788 86.6875C73.9857 86.6875 72.4758 88.103 72.4758 89.9904ZM77.6661 89.9904C77.6661 91.0285 76.8168 91.8778 75.7788 91.8778C74.7407 91.8778 73.8914 91.0285 73.8914 89.9904C73.8914 88.9524 74.7407 88.103 75.7788 88.103C76.8168 88.103 77.6661 88.9524 77.6661 89.9904Z" fill="currentColor" />
            <path d="M29.1602 55.6406C29.1602 53.4701 27.4615 51.7715 25.291 51.7715C23.1205 51.7715 21.4219 53.4701 21.4219 55.6406C21.4219 57.8111 23.1205 59.5098 25.291 59.5098C27.4615 59.5098 29.1602 57.8111 29.1602 55.6406ZM25.291 58.0942C23.9699 58.0942 22.8374 56.9618 22.8374 55.6406C22.8374 54.3195 23.9699 53.187 25.291 53.187C26.6122 53.187 27.7446 54.3195 27.7446 55.6406C27.7446 56.9618 26.7066 58.0942 25.291 58.0942Z" fill="currentColor" />
            <path d="M95.5018 8.83218H107.675C108.053 8.83218 108.43 8.54907 108.43 8.07722C108.43 7.60537 108.147 7.32227 107.675 7.32227H95.5018C95.1243 7.32227 94.7468 7.60537 94.7468 8.07722C94.7468 8.54907 95.1243 8.83218 95.5018 8.83218Z" fill="currentColor" />
            <path d="M87.5748 8.83218H91.5383C91.9158 8.83218 92.2933 8.54907 92.2933 8.07722C92.2933 7.60537 92.0101 7.32227 91.5383 7.32227H87.5748C87.1973 7.32227 86.8198 7.60537 86.8198 8.07722C86.8198 8.54907 87.1029 8.83218 87.5748 8.83218Z" fill="currentColor" />
            <path d="M96.068 11.5703H87.5748C87.1973 11.5703 86.8198 11.8534 86.8198 12.3253C86.8198 12.7971 87.1029 13.0802 87.5748 13.0802H96.068C96.4455 13.0802 96.823 12.7971 96.823 12.3253C96.823 11.8534 96.4455 11.5703 96.068 11.5703Z" fill="currentColor" />
            <path d="M99.6541 11.5703C99.2767 11.5703 98.8992 11.8534 98.8992 12.3253C98.8992 12.7971 99.1823 13.0802 99.6541 13.0802H102.391C102.768 13.0802 103.146 12.7971 103.146 12.3253C103.146 11.8534 102.863 11.5703 102.391 11.5703H99.6541Z" fill="currentColor" />
            <path d="M9.53132 98.2013H21.705C22.0825 98.2013 22.4599 97.9182 22.4599 97.4464C22.4599 96.9745 22.1768 96.6914 21.705 96.6914H9.53132C9.15385 96.6914 8.77637 96.9745 8.77637 97.4464C8.77637 97.9182 9.15385 98.2013 9.53132 98.2013Z" fill="currentColor" />
            <path d="M1.60408 96.7852C1.2266 96.7852 0.849121 97.0683 0.849121 97.5401C0.849121 98.012 1.13223 98.2951 1.60408 98.2951H5.56759C5.94507 98.2951 6.32255 98.012 6.32255 97.5401C6.32255 97.0683 5.94507 96.7852 5.56759 96.7852H1.60408Z" fill="currentColor" />
            <path d="M10.0973 100.938H1.60408C1.2266 100.938 0.849121 101.221 0.849121 101.692C0.849121 102.07 1.13223 102.447 1.60408 102.447H10.0973C10.4748 102.447 10.8523 102.164 10.8523 101.692C10.7579 101.221 10.4748 100.938 10.0973 100.938Z" fill="currentColor" />
            <path d="M16.5146 100.938H13.7779C13.4004 100.938 13.0229 101.221 13.0229 101.692C13.0229 102.07 13.3061 102.447 13.7779 102.447H16.5146C16.8921 102.447 17.2696 102.164 17.2696 101.692C17.1752 101.221 16.8921 100.938 16.5146 100.938Z" fill="currentColor" />
            <path d="M5.47339 23.8376C5.47339 25.3475 5.66213 26.763 6.03961 28.1786C8.02136 36.4831 15.3822 42.2396 23.9698 42.2396C25.0079 42.2396 26.0459 42.1453 27.084 41.9565C35.9547 40.4466 42.3718 32.8027 42.3718 23.8376C42.3718 13.6457 34.1617 5.43555 23.9698 5.43555C13.6835 5.43555 5.47339 13.6457 5.47339 23.8376ZM40.8619 23.8376C40.8619 32.1421 34.9167 39.2198 26.8009 40.541C25.8572 40.7297 24.8191 40.8241 23.8754 40.8241C16.0428 40.8241 9.24817 35.445 7.36078 27.8011C7.07767 26.4799 6.88893 25.1588 6.88893 23.7432C6.88893 14.4006 14.5329 6.75672 23.8754 6.75672C33.218 6.85109 40.8619 14.4006 40.8619 23.8376Z" fill="currentColor" />
            <path d="M23.8756 21.6663C22.6488 21.6663 21.7051 22.61 21.7051 23.8368C21.7051 25.0636 22.6488 26.0073 23.8756 26.0073C23.9699 26.0073 24.0643 26.0073 24.1587 26.0073L26.3292 30.4427C26.4235 30.7258 26.7067 30.8202 26.9898 30.8202C27.0841 30.8202 27.1785 30.8202 27.2729 30.7258C27.6504 30.5371 27.7447 30.1596 27.556 29.7821L25.3855 25.3467C25.4799 25.2524 25.4799 25.158 25.5742 25.158C25.5742 25.0636 25.6686 25.0636 25.6686 24.9693C25.763 24.8749 25.763 24.6862 25.8573 24.5918C25.8573 24.4974 25.9517 24.4974 25.9517 24.403C26.0461 24.2143 26.0461 24.0256 26.0461 23.7425C26.0461 23.6481 26.0461 23.6481 26.0461 23.5537L34.8224 19.4958C35.1999 19.3071 35.2943 18.9296 35.1999 18.5521C35.0112 18.1747 34.6337 18.0803 34.2562 18.1747L25.4799 22.2325C25.008 21.8551 24.4418 21.6663 23.8756 21.6663ZM23.0262 23.8368C23.0262 23.4594 23.3094 23.0819 23.7812 23.0819L23.5925 23.1762C23.215 23.365 23.1206 23.7425 23.3094 24.1199L23.4037 24.3087C23.1206 24.2143 23.0262 24.0256 23.0262 23.8368Z" fill="currentColor" />
            <path d="M23.1206 9.11628V11.098C23.1206 11.4755 23.4037 11.853 23.8756 11.853C24.253 11.853 24.6305 11.5699 24.6305 11.098V9.11628C24.6305 8.73881 24.3474 8.36133 23.8756 8.36133C23.4981 8.36133 23.1206 8.64444 23.1206 9.11628Z" fill="currentColor" />
            <path d="M11.0412 23.082H9.0594C8.68192 23.082 8.30444 23.3651 8.30444 23.837C8.30444 24.2145 8.58755 24.5919 9.0594 24.5919H11.0412C11.4186 24.5919 11.7961 24.3088 11.7961 23.837C11.7961 23.4595 11.513 23.082 11.0412 23.082Z" fill="currentColor" />
            <path d="M23.8756 35.8223C23.4981 35.8223 23.1206 36.1054 23.1206 36.5772V38.559C23.1206 38.9365 23.4037 39.3139 23.8756 39.3139C24.253 39.3139 24.6305 39.0308 24.6305 38.559V36.5772C24.5361 36.1997 24.253 35.8223 23.8756 35.8223Z" fill="currentColor" />
            <path d="M36.6153 24.4982H38.5971C38.9745 24.4982 39.352 24.2151 39.352 23.7432C39.352 23.3658 39.0689 22.9883 38.5971 22.9883H36.6153C36.2378 22.9883 35.8604 23.2714 35.8604 23.7432C35.8604 24.2151 36.2378 24.4982 36.6153 24.4982Z" fill="currentColor" />
        </svg>

    )
}
