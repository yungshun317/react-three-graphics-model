import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

const Scene = () => {
    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight />
            <OrbitControls />

            <Suspense
                fallback={
                    <mesh scale-y={2}>
                        <boxGeometry />
                        <meshBasicMaterial wireframe />
                    </mesh>
                }
            >
                <Model />
            </Suspense>
        </>
    );
};

export default Scene;