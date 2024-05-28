
import { FaCoins } from "react-icons/fa6";

import logo from '../../public/pl.png'
import history from '../../public/trd.png'
import chart from '../../public/his.png'
import profile from '../../public/pro.png'
import ab from '../../public/ab.png'
import alt from '../../public/alt.png'
import mny from '../../public/money.png'
import scan from '../../public/scn (1).png'
import bc from '../../public/bc.png'
import pr from '../../public/pr.png'

import { ImBell } from "react-icons/im";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400">
                  <div className="navbar-start">
                  <div className="drawer ">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">
                              
                              <label
                                htmlFor="my-drawer"
                                className="text-semibold lg:text-2xl md:text-xl text-white text-xs"
                              >
                                {" "}
                                Dashboard
                              </label>
                            </div>
                            <div className="drawer-side">
                              <label
                                htmlFor="my-drawer"
                                aria-label="close sidebar"
                                className="drawer-overlay"
                              ></label>
                                

                              <ul className="menu p-4 lg:w-80 w-8/12 md:w-3/12 min-h-full bg-gradient-to-r from-indigo-800 via-blue-600 border border-white text-base-content">
                               <section className="shadow-lg shadow-blue-500 rounded-lg text-blue-600 mb-10 bg-white">
                               <div className="flex py-3 ">
                                  <img
                                    className="lg:w-10 lg:h-10 w-5 h-5 "
                                    src={logo}
                                    alt=""
                                  />
                                  <p className="lg:text-xl mt-1 ml-4 lg:mt-3 lg:ml-4 font-serif font-bold text-transparent
       bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-xs">
                                   Unfluke
                                  </p>
                                </div>
                               </section>
                               
                               <section className="">
                               <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={history} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">Historical Trading</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={chart} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">Historical Chart</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={scan} alt="" />
                                <p className="lg:text-xl text-xs font-medium lg:mt-2 mt-2 text-white">Scanners</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={alt} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 mt-1 text-white">Alert</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={bc} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">Basic Backtest</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={ab} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">Advance Backtest</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={pr} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">Pricing</p>
                                </div>

                                <div className="flex gap-3">
                                <img className="lg:w-10 lg:h-10 w-8 h-7 " src={mny} alt="" />
                                <p className="lg:text-xl text-xs my-2 font-medium lg:mt-2 text-white">My Earning</p>
                                </div>
                               </section>

                               

                                
                              </ul>
                            </div>
                          </div>
                  </div>





  {/* part-2 */}
  
  <div className="navbar-end lg:mx-3">
    <p className='text-amber-400 lg:text-4xl lg:mx-4 lg:pt-1'> <ImBell /></p>
    <p className="btn btn-ghost btn-circle text-amber-400 lg:text-4xl lg:mx-4 lg:pt-1">
    <FaCoins />
    </p>
    <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className=""><img className='lg:w-10 lg:h-10 w-6 h-6 rounded-full m-1' src={profile} alt="" /></div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-center text-white
       bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 rounded-box w-52">
    <li><a>My Profile</a></li>
    <li><a>My Earning</a></li>
    <li><a>Funds</a></li>
    <li><a>Change Password</a></li>
    <li className=""><a>Logout</a></li>
    
  </ul>
</div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;
