setFunction({
  name: 'brush',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'frequency',
      default: 0,
    },
    {
      type: 'float',
      name: 'sync',
      default: .1,
    },
  ],
  glsl:    vec2 st = _st;
  
  
   return vec4( tan(st.x*3.14159*frequency), tan(st.x*3.14159*frequency),tan(st.x*3.14159*frequency), 1.0);
})