#ifdef GL_ES
precision mediump float;

#endif

void main() {
    vec3 color = vec3(1.0, 0.6, 0.9);

    gl_FragColor = vec4(color, 1);

}