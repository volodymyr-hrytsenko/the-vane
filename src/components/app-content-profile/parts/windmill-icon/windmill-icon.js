import React, {Component} from 'react';

class WindmillIcon extends Component {
    render() {
        return (
            <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M1.09961 8.3685H10.5669C12.874 8.3685 14.7509 6.4916 14.7509 4.18447C14.7509 1.87735 12.874 0.000447923 10.5669 0.000447923H8.5076C7.90086 0.000447923 7.40897 0.492341 7.40897 1.09908C7.40897 1.70582 7.90086 2.19771 8.5076 2.19771H10.5669C11.6624 2.19771 12.5536 3.08892 12.5536 4.18447C12.5536 5.28003 11.6624 6.17124 10.5669 6.17124H1.09961C0.49287 6.17124 0.000976562 6.66313 0.000976562 7.26987C0.000976562 7.8766 0.49287 8.3685 1.09961 8.3685ZM60.0624 8.3685H70.8168C73.1239 8.3685 75.0008 6.4916 75.0008 4.18447C75.0008 1.87735 73.1239 0.000447923 70.8168 0.000447923H68.7575C68.1508 0.000447923 67.6589 0.492341 67.6589 1.09908C67.6589 1.70582 68.1508 2.19771 68.7575 2.19771H70.8168C71.9124 2.19771 72.8036 3.08892 72.8036 4.18447C72.8036 5.28003 71.9124 6.17124 70.8168 6.17124H60.0624C59.4556 6.17124 58.9638 6.66313 58.9638 7.26987C58.9638 7.8766 59.4556 8.3685 60.0624 8.3685ZM56.955 15.3811H66.4223C67.5178 15.3811 68.409 16.2723 68.409 17.3679C68.409 18.4634 67.5178 19.3547 66.4223 19.3547H64.363C63.7563 19.3547 63.2644 19.8465 63.2644 20.4533C63.2644 21.06 63.7563 21.5519 64.363 21.5519H66.4223C68.7294 21.5519 70.6063 19.675 70.6063 17.3679C70.6063 15.0608 68.7294 13.1839 66.4223 13.1839H56.955C56.3483 13.1839 55.8564 13.6758 55.8564 14.2825C55.8564 14.8892 56.3483 15.3811 56.955 15.3811ZM1.09961 13.1839H10.5669C11.6624 13.1839 12.5536 14.0751 12.5536 15.1706C12.5536 16.2662 11.6624 17.1574 10.5669 17.1574H8.5076C7.90086 17.1574 7.40897 17.6493 7.40897 18.256C7.40897 18.8628 7.90086 19.3547 8.5076 19.3547H10.5669C12.874 19.3547 14.7509 17.4778 14.7509 15.1706C14.7509 12.8635 12.874 10.9866 10.5669 10.9866H1.09961C0.49287 10.9866 0.000976562 11.4785 0.000976562 12.0852C0.000976562 12.692 0.49287 13.1839 1.09961 13.1839ZM70.8297 33.7608C69.8868 32.4265 68.5082 31.4192 66.9476 30.9246L55.3641 27.2594C55.1141 25.445 53.9691 23.9132 52.3895 23.125V6.89531C52.3895 5.99648 52.2086 5.12431 51.8521 4.30371L50.4363 1.03726C50.1678 0.414851 49.5564 0.00791861 48.8788 0.000447923C48.2064 -0.0115638 47.5814 0.385994 47.3003 1.0002L44.5128 7.05996C43.8297 8.5434 43.6471 10.2403 43.9985 11.8387L46.6162 23.7063C45.3358 24.7051 44.51 26.2608 44.51 28.0067C44.51 28.121 44.5147 28.2342 44.5217 28.3467L31.9626 35.5975C31.4372 35.9009 31.2572 36.5728 31.5605 37.0983C31.764 37.4507 32.1333 37.6477 32.513 37.6477C32.6993 37.6477 32.8883 37.6003 33.0613 37.5004L45.1321 30.5315C45.3232 30.8955 45.5553 31.2341 45.8203 31.544L45.797 32.0128L37.4605 39.6348C37.1072 39.9585 36.7146 40.23 36.2906 40.4463L29.3362 38.2455C29.0863 36.4316 27.9415 34.9001 26.3624 34.1118V17.8816C26.3624 16.9869 26.1818 16.1152 25.8251 15.29L24.4082 12.0209C24.1383 11.4001 23.5269 10.9942 22.8507 10.9868C22.1735 10.979 21.5551 11.3716 21.2716 11.9865L18.4842 18.0463C17.8006 19.5309 17.6185 21.228 17.9714 22.825L20.589 34.6921C19.3083 35.6909 18.4823 37.247 18.4823 38.9932C18.4823 39.1073 18.487 39.2204 18.4939 39.3327L4.4393 47.4475C3.66323 47.8959 2.99863 48.4877 2.46293 49.2078L0.341406 52.0687C-0.0625975 52.6117 -0.109179 53.3438 0.222607 53.9338C0.554979 54.5249 1.21035 54.8649 1.87934 54.8028L8.52166 54.1875C10.1491 54.0358 11.7099 53.345 12.9168 52.2418L19.4982 46.2235L18.8026 60.1752C18.7725 60.7812 19.2392 61.297 19.8452 61.3272C20.4456 61.3571 20.9675 60.8926 20.9971 60.2847L21.8032 44.1156L21.8819 44.0437C22.5162 44.3025 23.209 44.4464 23.9353 44.4464C24.6146 44.4464 25.2644 44.3199 25.8645 44.0919L27.2951 72.803H20.3731L20.7814 64.6153C20.8115 64.0093 20.3448 63.4935 19.7388 63.4634C19.1321 63.4346 18.6171 63.8999 18.5869 64.5059L18.1732 72.803H9.35486C8.74813 72.803 8.25623 73.2949 8.25623 73.9017C8.25623 74.5084 8.74813 75.0003 9.35486 75.0003H65.6469C66.2537 75.0003 66.7456 74.5084 66.7456 73.9017C66.7456 73.2949 66.2537 72.803 65.6469 72.803H55.9617L53.9845 33.1297L67.0321 40.6637C67.8096 41.1127 68.6554 41.3925 69.5463 41.4951L73.0847 41.9024C73.7485 41.9794 74.4134 41.6551 74.759 41.0721C75.1042 40.4895 75.0745 39.7561 74.6833 39.2035L70.8297 33.7608ZM19.6536 43.1038L11.4339 50.6199C10.5782 51.402 9.47147 51.892 8.31805 51.9995L2.74506 52.5157L4.22675 50.5177C4.58168 50.0406 5.02304 49.6477 5.53807 49.3501L19.1038 41.5174C19.2693 41.8328 19.4668 42.1282 19.6884 42.4036L19.6536 43.1038ZM20.1166 22.3513C19.8666 21.2194 19.9956 20.0169 20.4799 18.9649L22.8189 13.8801L23.8083 16.1628C24.0449 16.7102 24.1648 17.2885 24.1648 17.8816V33.5456C24.0885 33.5424 24.0122 33.5397 23.9352 33.5397C23.4818 33.5397 23.0416 33.5963 22.6202 33.701L20.1166 22.3513ZM23.9352 42.2489C22.1398 42.2489 20.6791 40.7884 20.6791 38.9929C20.6791 37.1976 22.1397 35.7368 23.9352 35.7368C25.7306 35.7368 27.1912 37.1974 27.1912 38.9929C27.1912 40.7884 25.7306 42.2489 23.9352 42.2489ZM53.2192 28.0067C53.2192 28.0224 53.2182 28.0378 53.2181 28.0535C53.2178 28.0636 53.2173 28.0738 53.2173 28.0839C53.176 29.8438 51.7329 31.2628 49.9633 31.2628C48.168 31.2628 46.7073 29.8022 46.7073 28.0067C46.7073 26.2113 48.1679 24.7507 49.9633 24.7507C51.7588 24.7507 53.2192 26.2113 53.2192 28.0067ZM46.1442 11.366C45.895 10.2331 46.0245 9.03017 46.5086 7.97856L48.8468 2.89541L49.8363 5.17837C50.0725 5.72182 50.1921 6.29956 50.1921 6.89545V22.5594C50.1161 22.5564 50.0399 22.5536 49.9632 22.5536C49.5095 22.5536 49.069 22.6101 48.6475 22.715L46.1442 11.366ZM38.9439 41.2555L45.6413 35.1322L45.1384 45.2217L44.8018 44.7464C43.8573 43.4122 42.4784 42.4052 40.9187 41.9109L38.9184 41.2779C38.9268 41.2703 38.9356 41.2631 38.9439 41.2555ZM29.1752 40.499L40.2552 44.0054C41.361 44.356 42.3388 45.0699 43.0084 46.0159L45.1928 49.101C45.1942 49.1031 45.1956 49.1051 45.1972 49.1072L46.2422 50.583L43.7688 50.2984C43.1798 50.2306 42.6195 50.0451 42.1034 49.7469L28.5361 41.9148C28.8128 41.4806 29.0296 41.005 29.1752 40.499ZM43.7637 72.8029H29.4948L28.0688 44.1824L41.0045 51.6499C41.7822 52.099 42.6276 52.3788 43.5173 52.4813L44.7693 52.6253L43.7637 72.8029ZM45.9637 72.8029L46.9567 52.8771C47.6443 52.9821 48.3649 52.6757 48.7313 52.0572C49.0764 51.4747 49.0466 50.7417 48.6557 50.1896L47.1936 48.1246L47.9439 33.0703C48.5689 33.3204 49.2498 33.4599 49.9632 33.4599C50.6024 33.4599 51.2146 33.3459 51.785 33.1428L53.7617 72.8029H45.9637ZM69.7974 39.3121C69.2071 39.2441 68.6465 39.0587 68.1307 38.7607L54.5648 30.9273C54.8413 30.4935 55.0578 30.0181 55.2032 29.5129L66.284 33.0191C67.3901 33.3698 68.3671 34.0835 69.0357 35.0296L72.2692 39.5966L69.7974 39.3121Z" fill="black"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="75" height="75" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        );
    }
}

export default WindmillIcon;