import {
  Canvas,
  Fill,
  ImageShader,
  Shader,
  Skia,
  useClockValue,
  useComputedValue,
  useImage,
} from "@shopify/react-native-skia";
import { View, Text } from "react-native";
import { screenWidth } from "../constants";

export const ShaderScreen = () => {
  const circleShader = Skia.RuntimeEffect.Make(`
uniform float radius;
uniform float xPos;
uniform float yPos;
uniform vec3 color;

half4 main(float2 xy) {   
  vec2 normalized = xy/vec2(256);
    if (distance(xy, vec2(xPos,yPos)) > 100) {
        return vec4(1, 1, 1, 1);      
      }
   
    return vec4(color.x * normalized.x, normalized.y, color.z, 1);
}`)!;
  // shader code to add wave effect to its child shader
  // the wavelength will change in time
  const waveShader = Skia.RuntimeEffect.Make(`
  uniform shader image;
  uniform float clock;
  

  half4 main(float2 xy) {   
    float wavelength = cos(clock / 1500);
    xy.x += sin(xy.y /45) * (100 * wavelength);
    xy.y += cos(xy.x / 45) * (100 * wavelength);
    return image.eval(xy).rbga;
  }`)!;

  const image = useImage(require("./gym.png"));
  const radius = 100;
  const xPos = screenWidth / 2;
  const yPos = 400;
  const color = [1.0, 3.0, 0.5];
  const clock = useClockValue();
  const waveShaderUniforms = useComputedValue(
    () => ({ clock: clock.current }),
    [clock]
  );

  if (!image) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Fill>
          <Shader source={waveShader} uniforms={waveShaderUniforms}>
            {/* <Shader
              source={circleShader}
              uniforms={{ radius, xPos, yPos, color }}
            /> */}
            <ImageShader
              image={image}
              fit="cover"
              rect={{ x: xPos - 128, y: yPos - 128, width: 256, height: 256 }}
            />
          </Shader>
        </Fill>
      </Canvas>
    </View>
  );
};
