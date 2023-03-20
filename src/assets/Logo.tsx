import logo from "/public/logo.svg";

export default function Logo() {
  return (
    <div className="flex">
      <h1 className="font-logo text-4xl">Notesky</h1>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10"
      >
        <path
          d="M18.5314 5.19144C18.0576 4.66024 18.564 3.84293 19.2521 4.02629C38.4994 9.15521 49.8894 28.9499 44.6923 48.2389L44.0755 50.5284C38.686 25.5707 28.674 16.5619 18.5314 5.19144Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          d="M17.5869 95.5063C17.3627 96.1844 16.4041 96.1567 16.221 95.4679C11.0981 76.1986 22.5644 56.3602 41.8316 51.1574L44.1186 50.5399C25.2057 67.7745 22.3853 80.9894 17.5869 95.5063Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          d="M96.1396 50.9422C96.8376 50.7952 97.2897 51.6402 96.7847 52.1458C82.6603 66.2861 59.804 66.3299 45.7339 52.2436L44.0638 50.5716C68.3662 58.2946 81.1985 54.0885 96.1396 50.9422Z"
          fill="white"
          fill-opacity="0.8"
        />
      </svg>
    </div>
  );
}
