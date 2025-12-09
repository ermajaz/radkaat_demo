import { useResponsiveComponent } from "@/hooks/useResponsiveComponent";
import TestRideFlow from "./TestRideFlow";
import TestRideMobile from "./TestRideMobile";

export default function TestRide() {

    return (
        <>
            {useResponsiveComponent(<TestRideMobile />, <TestRideFlow />)}</>

    );

}