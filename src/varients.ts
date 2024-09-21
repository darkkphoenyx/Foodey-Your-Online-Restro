export const fadeIn = (direction:string, delay:number) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0, 
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0, 
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}


// for animation trigger

// import motion
// import {motion} from "framer-motion"

// import varient.ts
// import {fadeIn} from '../varients
/* <motion.div>
varients={fadeIn("up",0.2)}
initials="hidden"
whileInView={"show"}
viewPort={{once:true, amount:0.7}}
</motion.div> */