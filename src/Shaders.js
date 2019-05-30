export const vertexShaderText = `precision mediump float;

attribute vec2 vertPosition;
attribute vec3 vertColour;

varying vec3 fragColour;

void main() {
    fragColour = vertColour;
    gl_Position = vec4(vertPosition, 0.0, 1.0);
}
`;

export const fragmentShaderText = `precision mediump float;

varying vec3 fragColour;

void main() {
    gl_FragColor = vec4(fragColour, 1.0);
}
`;
