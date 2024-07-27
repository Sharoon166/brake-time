export default function Label({ message, variant = 'default' }) {
    const styles = {
      default: {
        foreground: "#1c1c1c",
        background: "#dddddd",
      },
      success: {
        foreground: "#01AA07",
        background: "#ACF8D2",
      },
      warning: {
        foreground: "#FFB100",
        background: "#FFF2D7",
      },
      danger: {
        foreground: "#BE1011",
        background: "#FFEEEE",
      },
      primary: {
        foreground: "#0047FF",
        background: "#EDF2FF",
      },
    };

    const { foreground, background } = styles[variant] || styles.default;

   return (
     <div
       style={{ color: foreground, backgroundColor: background }}
       className="flex items-center gap-1 text-xs px-3 py-1 rounded-full w-max">
       <span
         style={{ backgroundColor: foreground }}
         className="border inline-block size-3 rounded-full mr-1"
       />
       {message}
     </div>
   );

}