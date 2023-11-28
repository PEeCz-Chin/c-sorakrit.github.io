import Link from "next/link";
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { FaExternalLinkAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-3xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold text-yellow-600">In 2020 - now : Digital Associates Co., Ltd</h5>
            <p className="font-semibold">Development Manager, Technical Lead, System Analyst, Software Architecture</p>
            <p className="my-3">I don't know why I am doing this job</p>
            <p className="my-2 text-1xl font-bold text-yellow-700">Project</p>
            <p className="my-2">• Data Collection for Sports Authority of Thailand (Launched)</p>
            <p className="my-2">• Registration system for Football Association (Launched)</p>
            <p className="my-2">• Platform Data Management (Launched)</p>
            <p className="my-2">• Online Learning system for Football Association (Develop)</p>
            <p className="my-2">• Data Collection for NBTC (Develop)</p>
            <p className="my-2">• Tookdee Website (Launched)</p>
            <p className="my-2 text-1xl font-bold text-yellow-700">Product</p>
            <p className="my-2">• Intensive Voice (Develop)</p>
            <p className="my-2">• People Counting (Design)</p>

          </div>
        </div>
        <div>
        <div className="flex my-7 text-3xl font-bold"></div>
          <div className="">
            <h5 className="my-2 text-xl font-bold text-yellow-600">In 2019 - 2020 : Logicspark Co., Ltd.</h5>
            <p className="font-semibold">Senior Backend Developer</p>
            <p className="my-2">• IoT Tuya Smart control and kaiterras devices of LPN Smart Room (LUMPINI CONDOMINIUM)</p>
            <p className="my-2">• IoT Wulian Cloud Devices control</p>
            <p className="my-2">• API Pawnshop</p>
            <p className="my-2">• Create a web application for the online home management system. 
              <Link 
                className="font-bold text-blue-500" 
                href="https://dd-iy.com" 
                target="_blank">
              </Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="">
            <h5 className="my-2 text-xl font-bold text-yellow-600">In 2018 - 2019 : Telecorp Co., Ltd.</h5>
            <p className="font-semibold">Senior Backend Developer</p>
            <p className="my-2">• Institute of Dermatology.</p>
            <p className="my-2">• Bangkok Hospital Rayong (Web Application)
              <Link 
                className="font-bold text-blue-500" 
                href="https://www.bangkokhospitalrayong.com/" 
                target="_blank">
                <FaExternalLinkAlt />
              </Link>
            </p>
            <p className="my-2">• Samitivej Chonburi Hospital (Web Application, Web Design, Queue System).
              <Link 
                className="font-bold text-blue-500" 
                href="https://samitivejchonburi.com" 
                target="_blank">
                <FaExternalLinkAlt /> 
              </Link>
            </p>
            <p className="my-2">• Checkup Department, Thonburi Bamrung Muang Hospital (Website).</p>
            <p className="my-2">• Manage Customize Queue System on site Medical Record Department, Phramongkutklao Hospital.</p>
            <p className="my-2">• Able to bring PHP and Nodejs to collab use together not found problem and use Node.js transfer data Rest API.</p>
            <p className="my-2">• Train the team to use PHP CodeIgniter efficiently.</p>

          </div>
        </div>
        <div>
          <div className="">
            <h5 className="my-2 text-xl font-bold text-yellow-600">In 2010 - 2017 : Aeon Thailand Co., Ltd.</h5>
            <p className="my-2">• In 2010-2013 Junior Backend Development</p>
            <p className="my-2">• In 2014-2014 Middle Backend Development</p>
            <p className="my-2">• In 2015-2017 Senior Backend Development & Tech Lead with PHP Language.</p>
            <p className="my-2">• Designing a system to meet customer requirements.Controlling technology and managing resources.</p>
            <p className="my-2">• Assigning tasks to the team and its members.</p>
            <p className="my-2">• Collaborating with the team to develop products and resolve technical issues.</p>
            <p className="my-2">• Analyzing customer requirements and presenting solutions that meet their needs.</p>
            <p className="my-2">• Setting goals for the team.</p>
            <p className="my-2">• Advising team members on various approaches and implementing new technologies.</p>

          </div>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="">
            <h5 className="my-2 text-xl font-bold text-yellow-600">In 2008 - 2017 : Owner Computer Net Store @CounterNet RSU</h5>
            <p className="my-2">• In Business have internet and games 70 machines.</p>
            <p className="my-2">• Taken care Network 4 line and Checked LAN network.</p>
            <p className="my-2">• Fixed system when found problem in store by remote 24 hrs.</p>
            <p className="my-2">• Updated Game and Social to be modern.</p>
            <p className="my-2">• Finding Software program for to improve system in Business</p>

          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-3xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-3xl font-bold">Management & Design</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
