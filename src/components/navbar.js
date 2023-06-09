export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-2">
      <div class="flex">
        <img className="w-14 h-14 object-cover rounded-full shadow" src="photo_6055347118320760264_y.jpg" alt="" />
        <div class="mx-6">
          <h1 className="text-lg font-medium">Naufal Zaul</h1>
          <p className="text-sm font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
      <ul className="flex">
        <a href="#">
          <li className="mx-1 p-2">
            <img width="32" height="32" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new" />
          </li>
        </a>
        <a href="#">
          <li className="mx-1 p-2">
            <img width="32" height="32" src="https://img.icons8.com/material-outlined/48/github.png" alt="github" />
          </li>
        </a>
        <a href="#">
          <li className="mx-1 p-2">
            <img width="32" height="32" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
          </li>
        </a>
      </ul>

    </nav>
  )
};
