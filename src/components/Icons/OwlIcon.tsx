import { createIcon } from "@chakra-ui/icons";

// using `path`
const OwlIcon = createIcon({
  displayName: "OwlIcon",
  viewBox: "0 0 160 160",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: [
    <path
      fill="#040210"
      d="M138.761 36.792c1.55-9.305 0-13.957 0-13.957S134.107 5 113.17 5 84.48 33.69 84.48 33.69c-.388 1.164-9.693 7.368-12.019 8.142-2.326.775-13.957 14.733-13.957 14.733-1.552 0-2.326-.775-2.326-.775-1.552.775-4.654 6.977-4.654 6.977C44.546 66.645 39.892 74.4 39.892 74.4c4.654-.775 4.654.776 4.654.776-6.203 3.102-9.305 19.385-9.305 20.16 0 .776-7.367 14.345-8.917 16.672-1.55 2.326-.776 3.101-.776 3.101s0 .776.776.776c.775 0-.776 1.552-.776 1.552-3.877 1.55-5.428 9.305-6.203 10.855-.776 1.55 0 9.306 0 8.53 0-.527 3.225-3.924 5.536-6.04l.07-.069c.008 0 .008 0 .015-.009 1.046-.961 1.891-1.636 2.132-1.636.17 0 .264.216.31.566 12.873-5.724 32.861-15.695 46.168-27.907 11.701-10.747 21.355-23.154 27.573-31.98-8.195 12.305-20.996 30.745-27.735 36.965-7.049 6.428-31.015 16.912-45.998 23.039.132 1.287-.318 3.97-.318 3.97.776 2.327 3.877.776 3.877.776s3.877-5.428 2.326-.776c-1.55 4.652 1.552 4.652 1.552 4.652s6.204-5.428 6.204-3.877c0 1.549-1.552 7.753-1.552 7.753v12.407s3.877.776 3.877 0c0-.775 4.654-5.428 4.654-5.428 1.55 0 1.55.776 1.55.776.775-.776 3.102-.776 3.102-.776 0 1.552 2.326.776 2.326.776 4.652-1.55 11.632-28.69 11.632-28.69l10.856-8.53s.776.775 0 1.552c-.775.775 0 6.203 0 8.53 0 1.242 1.552 1.602 2.997 1.663 1.362.061 2.644-.515 3.609-1.476 4.348-4.339 8.968-1.673 9.68-.964.775.775 2.326 0 2.326 0l2.326-2.326c1.552-1.55 5.078 1.187 5.893-.132.432-.7 1.668-3.333 1.085-6.072-.33-1.55-3.824-3.288-5.738-4.133a2.095 2.095 0 0 1-1.24-1.918V99.6l8.529-5.428s6.204-1.552 9.305-4.654c3.102-3.102 4.654-8.53 6.204-10.08 1.552-1.551 2.326 1.553 3.877 0 1.552-1.551 4.654-13.956 4.654-13.956s6.978-10.08 8.53-14.734c1.547-4.651-.778-13.956-.778-13.956ZM105.279 25.54c-3.032 0-5.482-1.464-5.482-3.287 0-1.822 2.45-3.288 5.482-3.288.216 0 .434 0 .652.046a2.18 2.18 0 0 0-1.752 2.149c0 1.202.985 2.187 2.195 2.187a2.201 2.201 0 0 0 2.195-2.187 2.17 2.17 0 0 0-1.187-1.93c1.97.48 3.374 1.644 3.374 3.024-.003 1.822-2.452 3.286-5.477 3.286Zm9.328 6.383s-1.845-1.845-1.845-3.698c0-1.845 1.845-1.845 1.845-1.845s1.854 0 1.854 1.845c0 1.853-1.854 3.698-1.854 3.698Zm8.98-6.383c-3.024 0-5.481-1.464-5.481-3.287 0-1.38 1.403-2.544 3.379-3.024a2.16 2.16 0 0 0-1.187 1.93c0 1.202.985 2.187 2.195 2.187a2.201 2.201 0 0 0 2.195-2.187 2.19 2.19 0 0 0-1.76-2.149c.225-.046.442-.046.658-.046 3.024 0 5.482 1.465 5.482 3.288.001 1.824-2.458 3.289-5.481 3.289Z"
    />,
    <path
      fill="#040210"
      d="M46 137c-3 1-7.667 1.667-10.5 3.5L22 144.542v7l5.5-1.5c1.5-.833 4.6-1.142 5-1.542.5-.5 6.5-2.958 10.5-3.958s12.5-2.5 15-3 7-1 12-2 8-4.5 11.5-7 6.5-5.5 9.5-8 13-2.5 15-3.5c1.6-.8 22-12.042 27.5-14.042-.333-3.5-2.9-3.9-4.5-3.5-2 .5-18.5 8.042-24 10.042s-12.5 1.5-19 5.5-10 6.5-11.5 10-11 4.5-16.5 5-9.446 2.107-12 2.958Z"
    />,
  ],
});

export default OwlIcon;
