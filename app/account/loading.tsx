'use client'
import Box from "@/components/Box"
import { BounceLoader } from "react-spinners"

const loading = () => {
  return (
    <Box className='h-full items-center flex justify-center'>
        <BounceLoader color='#22c55e' size={40}/>
    </Box>
  )
}

export default loading