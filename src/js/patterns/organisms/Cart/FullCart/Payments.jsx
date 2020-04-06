import React from 'react'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const Payments = () => {
    return (
        <section className='flex'>
            <div className='mr-3'>
                <svg className='fillColor' width='38' height='24' viewBox='0 0 38 24' fill='#31333E' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M33.25 1.13C34.2446 1.13 35.1984 1.52509 35.9016 2.22835C36.6049 2.93162 37 3.88544 37 4.88V19.13C37 20.1246 36.6049 21.0784 35.9016 21.7817C35.1984 22.4849 34.2446 22.88 33.25 22.88H4.75C3.75544 22.88 2.80161 22.4849 2.09835 21.7817C1.39509 21.0784 1 20.1246 1 19.13V4.88C1 3.88544 1.39509 2.93162 2.09835 2.22835C2.80161 1.52509 3.75544 1.13 4.75 1.13H33.25ZM33.25 0.130005H4.75C3.49022 0.130005 2.28204 0.63045 1.39124 1.52125C0.500445 2.41205 0 3.62023 0 4.88L0 19.13C0 20.3898 0.500445 21.598 1.39124 22.4888C2.28204 23.3796 3.49022 23.88 4.75 23.88H33.25C34.5098 23.88 35.718 23.3796 36.6088 22.4888C37.4996 21.598 38 20.3898 38 19.13V4.88C38 3.62023 37.4996 2.41205 36.6088 1.52125C35.718 0.63045 34.5098 0.130005 33.25 0.130005Z' />
                    <path d='M18.11 8.08C17.3965 7.5917 16.5632 7.30742 15.7 7.25782C14.8368 7.20822 13.9764 7.39518 13.2116 7.79853C12.4468 8.20189 11.8066 8.80635 11.3601 9.54674C10.9135 10.2871 10.6775 11.1354 10.6775 12C10.6775 12.8646 10.9135 13.7129 11.3601 14.4533C11.8066 15.1937 12.4468 15.7981 13.2116 16.2015C13.9764 16.6048 14.8368 16.7918 15.7 16.7422C16.5632 16.6926 17.3965 16.4083 18.11 15.92C17.1519 14.839 16.6229 13.4445 16.6229 12C16.6229 10.5555 17.1519 9.16102 18.11 8.08Z' />
                    <path d='M22.5601 16.75C25.1834 16.75 27.3101 14.6234 27.3101 12C27.3101 9.37665 25.1834 7.25 22.5601 7.25C19.9367 7.25 17.8101 9.37665 17.8101 12C17.8101 14.6234 19.9367 16.75 22.5601 16.75Z' />
                </svg>
            </div>
            <div className='mr-3'>
                <svg className='' width='38' height='24' viewBox='0 0 38 24' fill='#31333E' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M33.25 1.13C34.2446 1.13 35.1984 1.52509 35.9016 2.22835C36.6049 2.93162 37 3.88544 37 4.88V19.13C37 20.1246 36.6049 21.0784 35.9016 21.7817C35.1984 22.4849 34.2446 22.88 33.25 22.88H4.75C3.75544 22.88 2.80161 22.4849 2.09835 21.7817C1.39509 21.0784 1 20.1246 1 19.13V4.88C1 3.88544 1.39509 2.93162 2.09835 2.22835C2.80161 1.52509 3.75544 1.13 4.75 1.13H33.25ZM33.25 0.130005H4.75C3.49022 0.130005 2.28204 0.63045 1.39124 1.52125C0.500445 2.41205 0 3.62023 0 4.88L0 19.13C0 20.3898 0.500445 21.598 1.39124 22.4888C2.28204 23.3796 3.49022 23.88 4.75 23.88H33.25C34.5098 23.88 35.718 23.3796 36.6088 22.4888C37.4996 21.598 38 20.3898 38 19.13V4.88C38 3.62023 37.4996 2.41205 36.6088 1.52125C35.718 0.63045 34.5098 0.130005 33.25 0.130005Z' />
                    <path d='M15.7599 8.57L12.8899 15.46H10.9999L9.60994 10C9.59871 9.87067 9.55411 9.74647 9.48049 9.63954C9.40687 9.53262 9.30675 9.44664 9.18994 9.39C8.63369 9.12064 8.04573 8.92241 7.43994 8.8V8.6H10.4399C10.6376 8.59995 10.8288 8.67041 10.9791 8.79873C11.1294 8.92705 11.229 9.1048 11.2599 9.3L12.0099 13.3L13.8499 8.61L15.7599 8.57ZM23.0899 13.21C23.0899 11.39 20.5899 11.29 20.6099 10.48C20.6099 10.23 20.8499 9.97 21.3599 9.9C21.9573 9.84422 22.5586 9.95135 23.0999 10.21L23.4099 8.75C22.8797 8.54772 22.3174 8.44271 21.7499 8.44C19.9999 8.44 18.7499 9.38 18.7499 10.72C18.7499 11.72 19.6299 12.27 20.2999 12.6C20.9699 12.93 21.2199 13.15 21.2199 13.46C21.2199 13.92 20.6699 14.13 20.1599 14.13C19.5255 14.1427 18.8985 13.9911 18.3399 13.69L17.9999 15.2C18.6366 15.4508 19.3157 15.5764 19.9999 15.57C21.8599 15.57 23.0699 14.65 23.0799 13.21H23.0899ZM27.6999 15.46H29.3399L27.9099 8.57H26.4099C26.2483 8.57048 26.0905 8.6193 25.9569 8.71019C25.8232 8.80107 25.7198 8.92987 25.6599 9.08L22.9999 15.46H24.8599L25.2299 14.46H27.4999L27.6999 15.46ZM25.6999 13.02L26.6299 10.43L27.1999 13L25.6999 13.02ZM18.2599 8.57L16.7999 15.46H15.0599L16.5199 8.57H18.2599Z' />
                </svg>
            </div>
            <div className='mr-3'>
                <svg className='' width='38' height='24' viewBox='0 0 38 24' fill='#31333E' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M33.25 1.13C34.2446 1.13 35.1984 1.52509 35.9016 2.22835C36.6049 2.93162 37 3.88544 37 4.88V19.13C37 20.1246 36.6049 21.0784 35.9016 21.7817C35.1984 22.4849 34.2446 22.88 33.25 22.88H4.75C3.75544 22.88 2.80161 22.4849 2.09835 21.7817C1.39509 21.0784 1 20.1246 1 19.13V4.88C1 3.88544 1.39509 2.93162 2.09835 2.22835C2.80161 1.52509 3.75544 1.13 4.75 1.13H33.25ZM33.25 0.130005H4.75C3.49022 0.130005 2.28204 0.63045 1.39124 1.52125C0.500445 2.41205 0 3.62023 0 4.88L0 19.13C0 20.3898 0.500445 21.598 1.39124 22.4888C2.28204 23.3796 3.49022 23.88 4.75 23.88H33.25C34.5098 23.88 35.718 23.3796 36.6088 22.4888C37.4996 21.598 38 20.3898 38 19.13V4.88C38 3.62023 37.4996 2.41205 36.6088 1.52125C35.718 0.63045 34.5098 0.130005 33.25 0.130005Z' />
                    <path d='M18.66 9.5H18L16.5 12.69L15 9.5H13V13.72L11.08 9.5H9.18L7 14.5H8.49L8.94 13.39H11.28L11.75 14.5H14.25V10.9L15.92 14.5H17.13L18.66 11.2V14.5H20V9.5H18.7H18.66ZM9.41 12.25L10.09 10.59L10.8 12.25H9.41Z' />
                    <path d='M31 9.5H29.24L27.82 11L26.43 9.5H20.92V14.5H26.32L27.79 12.93L29.23 14.5H31L28.69 12L31 9.5ZM25 14V13.35H22.2V12.56H25V11.43H22.2V10.64H25V9.88L26.93 12L25 14Z' />
                </svg>
            </div>
            <div>
                <svg className='' width='38' height='24' viewBox='0 0 38 24' fill='#31333E' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M33.25 1.13C34.2446 1.13 35.1984 1.52509 35.9016 2.22835C36.6049 2.93162 37 3.88544 37 4.88V19.13C37 20.1246 36.6049 21.0784 35.9016 21.7817C35.1984 22.4849 34.2446 22.88 33.25 22.88H4.75C3.75544 22.88 2.80161 22.4849 2.09835 21.7817C1.39509 21.0784 1 20.1246 1 19.13V4.88C1 3.88544 1.39509 2.93162 2.09835 2.22835C2.80161 1.52509 3.75544 1.13 4.75 1.13H33.25ZM33.25 0.130005H4.75C3.49022 0.130005 2.28204 0.63045 1.39124 1.52125C0.500445 2.41205 0 3.62023 0 4.88L0 19.13C0 20.3898 0.500445 21.598 1.39124 22.4888C2.28204 23.3796 3.49022 23.88 4.75 23.88H33.25C34.5098 23.88 35.718 23.3796 36.6088 22.4888C37.4996 21.598 38 20.3898 38 19.13V4.88C38 3.62023 37.4996 2.41205 36.6088 1.52125C35.718 0.63045 34.5098 0.130005 33.25 0.130005Z' />
                    <path d='M10.42 9.00001C10.2227 8.80905 9.98663 8.66286 9.72777 8.5714C9.46892 8.47994 9.19339 8.44536 8.91997 8.47001H6.84997C6.7827 8.47132 6.71799 8.49598 6.6669 8.53977C6.61582 8.58355 6.58155 8.64373 6.56997 8.71001L5.72997 14C5.72554 14.0247 5.72663 14.0501 5.73316 14.0743C5.7397 14.0985 5.75151 14.121 5.76777 14.1401C5.78402 14.1592 5.8043 14.1745 5.82716 14.1849C5.85001 14.1952 5.87488 14.2004 5.89997 14.2H6.89997C6.96016 14.1988 7.0185 14.1789 7.06688 14.1431C7.11527 14.1073 7.15129 14.0572 7.16997 14L7.39997 12.56C7.41155 12.4937 7.44582 12.4336 7.4969 12.3898C7.54799 12.346 7.6127 12.3213 7.67997 12.32H8.32997C8.61722 12.3517 8.90793 12.3244 9.18424 12.2397C9.46054 12.1549 9.7166 12.0146 9.93669 11.8273C10.1568 11.64 10.3362 11.4096 10.4641 11.1504C10.5919 10.8912 10.6654 10.6086 10.68 10.32C10.7344 10.0943 10.7393 9.85939 10.6945 9.63155C10.6496 9.4037 10.5559 9.18826 10.42 9.00001ZM9.14997 10.39C9.03997 11.14 8.46997 11.14 7.91997 11.14H7.61997L7.83997 9.75001C7.84235 9.70835 7.85998 9.66902 7.88948 9.63952C7.91898 9.61002 7.95831 9.59239 7.99997 9.59001H8.13997C8.50997 9.59001 8.85997 9.59001 9.04997 9.80001C9.10921 9.88485 9.1489 9.98176 9.16619 10.0838C9.18348 10.1858 9.17794 10.2904 9.14997 10.39ZM15.08 10.39H14.08C14.0381 10.3897 13.9977 10.4049 13.9663 10.4325C13.9349 10.4602 13.9149 10.4985 13.91 10.54V10.82L13.84 10.72C13.6905 10.5646 13.5071 10.4459 13.3041 10.373C13.1012 10.3002 12.8842 10.2752 12.67 10.3C12.1229 10.3127 11.5986 10.5217 11.1929 10.8889C10.7872 11.2561 10.527 11.7569 10.46 12.3C10.4081 12.5666 10.4143 12.8413 10.4781 13.1054C10.542 13.3694 10.662 13.6165 10.83 13.83C10.9859 14.0044 11.1795 14.1409 11.3961 14.2293C11.6127 14.3176 11.8466 14.3555 12.08 14.34C12.335 14.3423 12.5878 14.293 12.8232 14.1951C13.0587 14.0971 13.2719 13.9525 13.45 13.77V14.05C13.4455 14.0747 13.4466 14.1001 13.4532 14.1243C13.4597 14.1485 13.4715 14.171 13.4878 14.1901C13.504 14.2092 13.5243 14.2245 13.5472 14.2349C13.57 14.2452 13.5949 14.2504 13.62 14.25H14.51C14.5772 14.2487 14.6419 14.224 14.693 14.1802C14.7441 14.1365 14.7784 14.0763 14.79 14.01L15.32 10.6C15.3418 10.5678 15.3519 10.5291 15.3486 10.4904C15.3453 10.4516 15.3288 10.4152 15.3019 10.3871C15.275 10.359 15.2393 10.341 15.2007 10.3361C15.1622 10.3312 15.1231 10.3396 15.09 10.36L15.08 10.39ZM13.71 12.3C13.6847 12.5776 13.555 12.8352 13.3471 13.0208C13.1392 13.2064 12.8686 13.3062 12.59 13.3C12.4668 13.3069 12.3437 13.2862 12.2295 13.2395C12.1153 13.1928 12.013 13.1212 11.93 13.03C11.8538 12.9321 11.8001 12.8187 11.7724 12.6977C11.7448 12.5768 11.7439 12.4513 11.77 12.33C11.7973 12.0551 11.9263 11.8002 12.1315 11.6153C12.3368 11.4304 12.6037 11.3286 12.88 11.33C13.0031 11.3231 13.1263 11.3438 13.2404 11.3905C13.3546 11.4372 13.4569 11.5088 13.54 11.6C13.6166 11.6978 13.6715 11.8108 13.7008 11.9316C13.7301 12.0523 13.7333 12.178 13.71 12.3ZM20.35 10.36H19.35C19.3024 10.3603 19.2556 10.3723 19.2137 10.395C19.1719 10.4177 19.1362 10.4503 19.11 10.49L17.74 12.49L17.16 10.49C17.1425 10.4293 17.1058 10.3759 17.0552 10.338C17.0047 10.3001 16.9431 10.2797 16.88 10.28H15.88C15.8524 10.2799 15.8252 10.2864 15.8007 10.2991C15.7762 10.3118 15.7552 10.3303 15.7395 10.3529C15.7237 10.3756 15.7137 10.4017 15.7103 10.4291C15.7069 10.4564 15.7102 10.4842 15.72 10.51L16.81 13.74L15.81 15.2C15.7914 15.2255 15.7803 15.2557 15.7779 15.2872C15.7755 15.3187 15.782 15.3502 15.7965 15.3783C15.811 15.4063 15.8331 15.4297 15.8602 15.4459C15.8873 15.4621 15.9184 15.4705 15.95 15.47H16.95C16.9967 15.4708 17.0429 15.4603 17.0847 15.4394C17.1265 15.4185 17.1626 15.3879 17.19 15.35L20.49 10.55C20.4958 10.5064 20.4844 10.4622 20.4583 10.4268C20.4322 10.3913 20.3934 10.3674 20.35 10.36ZM25.14 9.00001C24.9427 8.80905 24.7066 8.66286 24.4478 8.5714C24.1889 8.47994 23.9134 8.44536 23.64 8.47001H21.57C21.5027 8.47132 21.438 8.49598 21.3869 8.53977C21.3358 8.58355 21.3016 8.64373 21.29 8.71001L20.46 14C20.4555 14.0247 20.4566 14.0501 20.4632 14.0743C20.4697 14.0985 20.4815 14.121 20.4978 14.1401C20.514 14.1592 20.5343 14.1745 20.5572 14.1849C20.58 14.1952 20.6049 14.2004 20.63 14.2H21.69C21.7382 14.2006 21.785 14.1836 21.8218 14.1524C21.8585 14.1212 21.8827 14.0777 21.89 14.03L22.13 12.52C22.1416 12.4537 22.1758 12.3936 22.2269 12.3498C22.278 12.306 22.3427 12.2813 22.41 12.28H23.06C23.3472 12.3117 23.6379 12.2844 23.9142 12.1997C24.1905 12.1149 24.4466 11.9746 24.6667 11.7873C24.8868 11.6 25.0662 11.3696 25.1941 11.1104C25.3219 10.8512 25.3954 10.5686 25.41 10.28C25.457 10.0596 25.4573 9.83184 25.4108 9.61135C25.3643 9.39086 25.272 9.18259 25.14 9.00001ZM23.87 10.42C23.76 11.17 23.19 11.17 22.64 11.17H22.33L22.55 9.78001C22.5549 9.73847 22.5749 9.7002 22.6063 9.67253C22.6377 9.64486 22.6781 9.62972 22.72 9.63001H22.86C23.23 9.63001 23.58 9.63001 23.77 9.84001C23.8252 9.91915 23.8635 10.0089 23.8825 10.1035C23.9014 10.1982 23.9005 10.2957 23.88 10.39L23.87 10.42ZM29.8 10.42H28.8C28.7581 10.4197 28.7177 10.4349 28.6863 10.4625C28.6549 10.4902 28.6349 10.5285 28.63 10.57V10.85L28.56 10.75C28.4105 10.5946 28.2271 10.4759 28.0241 10.403C27.8212 10.3302 27.6042 10.3052 27.39 10.33C26.8429 10.3427 26.3186 10.5517 25.9129 10.9189C25.5072 11.2861 25.247 11.7869 25.18 12.33C25.1281 12.5966 25.1343 12.8713 25.1981 13.1354C25.262 13.3994 25.382 13.6466 25.55 13.86C25.7059 14.0344 25.8995 14.1709 26.1161 14.2593C26.3327 14.3477 26.5666 14.3855 26.8 14.37C27.055 14.3723 27.3078 14.323 27.5432 14.2251C27.7787 14.1271 27.9919 13.9825 28.17 13.8V14.08C28.1655 14.1047 28.1666 14.1301 28.1732 14.1543C28.1797 14.1785 28.1915 14.201 28.2078 14.2201C28.224 14.2392 28.2443 14.2545 28.2672 14.2649C28.29 14.2752 28.3149 14.2804 28.34 14.28H29.23C29.2972 14.2787 29.3619 14.254 29.413 14.2102C29.4641 14.1665 29.4984 14.1063 29.51 14.04L30 10.56C30.005 10.5335 30.0036 10.5062 29.996 10.4804C29.9884 10.4546 29.9747 10.4309 29.9562 10.4114C29.9376 10.3918 29.9147 10.377 29.8893 10.3681C29.8638 10.3591 29.8367 10.3564 29.81 10.36L29.8 10.42ZM28.43 12.3C28.4047 12.5776 28.275 12.8352 28.0671 13.0208C27.8592 13.2064 27.5886 13.3062 27.31 13.3C27.1868 13.3069 27.0637 13.2862 26.9495 13.2395C26.8353 13.1928 26.733 13.1212 26.65 13.03C26.5738 12.9321 26.5201 12.8187 26.4924 12.6977C26.4648 12.5768 26.4639 12.4513 26.49 12.33C26.5173 12.0551 26.6463 11.8002 26.8515 11.6153C27.0568 11.4304 27.3237 11.3286 27.6 11.33C27.7231 11.3231 27.8463 11.3438 27.9604 11.3905C28.0746 11.4372 28.1769 11.5088 28.26 11.6C28.3372 11.6975 28.3924 11.8105 28.4218 11.9313C28.4511 12.0522 28.4539 12.178 28.43 12.3ZM32.1 8.44001H31.1C31.0581 8.43972 31.0177 8.45486 30.9863 8.48253C30.9549 8.5102 30.9349 8.54847 30.93 8.59001L30.13 14C30.1255 14.0247 30.1266 14.0501 30.1332 14.0743C30.1397 14.0985 30.1515 14.121 30.1678 14.1401C30.184 14.1592 30.2043 14.1745 30.2272 14.1849C30.25 14.1952 30.2749 14.2004 30.3 14.2H31.15C31.2172 14.1987 31.2819 14.174 31.333 14.1302C31.3841 14.0865 31.4184 14.0263 31.43 13.96L32.27 8.63001C32.2728 8.60606 32.2705 8.58179 32.2633 8.55879C32.256 8.5358 32.2439 8.51462 32.2278 8.49665C32.2118 8.47868 32.192 8.46433 32.17 8.45457C32.1479 8.4448 32.1241 8.43984 32.1 8.44001Z' />
                </svg>
            </div>
        </section>
    )
}

export default ComponentInjector.return('Payments', Payments)
