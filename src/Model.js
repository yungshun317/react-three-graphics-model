import {useEffect} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";

const Model = () => {
    const model = useGLTF("./static/models/dog.glb");
    const animations = useAnimations(model.animations, model.scene);

    console.log(model);
    console.log(animations);

    useEffect(() => {
        animations.actions.Idle.play();
    }, []);

    return <primitive position-y={-0.4} object={model.scene} />;
};
useGLTF.preload("./static/models/dog.glb");

export default Model;