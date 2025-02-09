import React from 'react'

export default function RightPointerArrow(props) {
    const color = props.color || "white"
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60001 12C3.60001 11.5029 4.00295 11.1 4.50001 11.1L17.2655 11.1L12.2762 6.34874C11.9179 6.00423 11.9067 5.43449 12.2513 5.0762C12.5958 4.7179 13.1655 4.70673 13.5238 5.05125L20.1238 11.3512C20.3003 11.5209 20.4 11.7552 20.4 12C20.4 12.2448 20.3003 12.4791 20.1238 12.6487L13.5238 18.9487C13.1655 19.2933 12.5958 19.2821 12.2513 18.9238C11.9067 18.5655 11.9179 17.9958 12.2762 17.6512L17.2655 12.9L4.50001 12.9C4.00295 12.9 3.60001 12.4971 3.60001 12Z" fill={color} />
            </svg>

        </div>
    )
}
