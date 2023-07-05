import './OriginalApp.scss';

function OriginalApp() {
  const loggedInUser = 'Graeme';
  const modulelist = [
    {
      ModuleID: 1,
      ModuleName: "Games Programming",
      ModuleCode: "CI2270",
      ModuleLevel: 4,
      ModuleLeaderID: 1,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg"
    },
    {
      ModuleID: 2,
      ModuleName: "Individual Project",
      ModuleCode: "CI7446",
      ModuleLevel: 7,
      ModuleLeaderID: 2,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg"
    },
    {
      ModuleID: 3,
      ModuleName: "Database Driven Web Applications",
      ModuleCode: "CI6388",
      ModuleLevel: 6,
      ModuleLeaderID: 3,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg"
    },
    {
      ModuleID: 4,
      ModuleName: "Advanced Data Modelling",
      ModuleCode: "CI8502",
      ModuleLevel: 6,
      ModuleLeaderID: 4,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg"
    },
    {
      ModuleID: 5,
      ModuleName: "Ethical Hacking",
      ModuleCode: "CI7572",
      ModuleLevel: 7,
      ModuleLeaderID: 5,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg"
    },
    {
      ModuleID: 6,
      ModuleName: "Network and Mobile Forensics",
      ModuleCode: "CI5068",
      ModuleLevel: 7, 
      ModuleLeaderID: 6, 
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg"
    },
    {
      ModuleID: 7,
      ModuleName: "Practical Data Analyst Skills",
      ModuleCode: "CI9213",
      ModuleLevel: 5,
      ModuleLeaderID: 7,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg"
    },
    {
      ModuleID: 8,
      ModuleName: "Statistics in Practice",
      ModuleCode: "CI5856",
      ModuleLevel: 7,
      ModuleLeaderID: 8,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg"
    },
    {
      ModuleID: 9,
      ModuleName: "Internet Services and Protocols",
      ModuleCode: "CI3651",
      ModuleLevel: 7,
      ModuleLeaderID: 9,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg"
    },
    {
      ModuleID: 10,
      ModuleName: "High Level Game Development",
      ModuleCode: "CI7952",
      ModuleLevel: 5,
      ModuleLeaderID: null,
      ModuleImageURL: "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg"
    }
  ];
  const studentlist= [
    { "UserID": 275, "UserFirstname": "Sholeh", "UserLastname": "ABBAS", "UserEmail": "K2955214@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 276, "UserFirstname": "Hashim", "UserLastname": "ABDALLAH", "UserEmail": "K1083353@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 277, "UserFirstname": "Ahmad", "UserLastname": "ABDUL KABEER", "UserEmail": "K2990629@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/MisXC_ZEtY_OSQvatKbth6GyUEgjX9eS3hzX7J_9ODI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQxNDMyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 278, "UserFirstname": "Suheyb", "UserLastname": "ABDULQADIR", "UserEmail": "K8536850@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/O9bUHzlvamPOMiK9j-hLGhHEf9ywbB7FlKjK8yKGuaw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzM4NzE0LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 279, "UserFirstname": "Ezubair", "UserLastname": "ABRAHAM", "UserEmail": "K5638915@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/BSqXpGXFt93GoCENwTf8D5y3N6o7rMSQ4w14z93bgkI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDcwNDk4LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 280, "UserFirstname": "Hisham", "UserLastname": "ABUBAKAR", "UserEmail": "K1035263@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/4fHOS2cD9Ykbz5pJ_0KQucwvzCMPQTR7-5rGAydjLGo/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM0MjczLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 281, "UserFirstname": "Mahamud", "UserLastname": "ADEN", "UserEmail": "K2866646@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/tcd-7pVoSrwBAW5wxgoTdkSWLacfi6D8Km-EFdUcqSs/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODU4OTk2LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 282, "UserFirstname": "Isaac", "UserLastname": "AFRAZEH", "UserEmail": "K7727337@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/FF4ulNLRGGsnEWCSK2hzxQ1kpTUXrQfb2_2BN4CbHj8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTU4NjEzLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 283, "UserFirstname": "Danish", "UserLastname": "AHMAD", "UserEmail": "K3008749@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/-_-hyUefVoOz8qBBv31AeMbBMzZXLcCXiWAneZb0u2U/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg1NDE4LmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" },
    { "UserID": 284, "UserFirstname": "Shuja", "UserLastname": "AHMAD", "UserEmail": "K8319360@kingston.ac.uk", "UserRegistered": 0, "UserLevel": 4, "UserYearID": 1, "UserUsertypeID": 2, "UserImageURL": "https://images.generated.photos/vnopGiDivHG6UKp3AgGkY44U3nOfR3lLsWNKdA-KEyQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjAzMjQyLmpwZw.jpg", "UserUsertypeName": "Student", "UserYearName": "2022-23" }
  ];

  return (
    <div className="layout">

      <header>
        <h1>Basic React Demo</h1>
        <p className="welcome">Welcome {loggedInUser}</p>
      </header>

      <nav>
        <div className="navItem">
          <a>Modules</a>
        </div>
        <div className="navItem">
          <a>Students</a>
        </div>
      </nav>

      <main>
        <h1>Modules</h1>
        <div className="cardContainer">
          {
            modulelist.map((module) => {
              return (
                <div className="moduleCard">
                  <div className="card">
                    <p>{module.ModuleCode}</p>
                    <p>{module.ModuleName}</p>
                    <img src={module.ModuleImageURL} alt={module.ModuleName} />
                  </div>
                </div>
              )
            })
          }
        </div>

        <h1>Students</h1>
        <div className="cardContainer">
          {
            studentlist.map((student) => {
              return (
                <div className="studentCard">
                  <div className="card">
                    <p>{student.UserEmail.substring(0,8)}</p>
                    <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                    <img src={student.UserImageURL} alt={student.UserEmail.substring(0, 8)} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>

      <footer>
        <p className="thankyou">Thank you for using this system!</p>
      </footer>

    </div>
  );
}

export default OriginalApp;
