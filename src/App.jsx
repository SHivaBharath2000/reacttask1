import React from 'react'
import Card from './card'
function App() {
  const data = [
    {
      plan: "FREE",
      price: 0,
      User: "Single User",
      isUser: true,
      storage: "5GB Storage",
      isStorage: true,
      publicProject: "Unlimited Public Projects",
      isPublicProject: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProject: "Unlimited Private Projects",
      isPrivateProject: false,
      support: "Dedicated Phone Support",
      isSupport: false,
      subDomain: "Free Subdomain",
      isSubdomain: false,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      plan: "PLUS",
      price: 9,
      User: "50 User",
      isUser: true,
      storage: "50GB Storage",
      isStorage: true,
      publicProject: "Unlimited Public Projects",
      isPublicProject: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProject: "Unlimited Private Projects",
      isPrivateProject: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      subDomain: "Free Subdomain",
      isSubdomain: true,
      reports: "Monthly Status Reports",
      isReports: false
    },
    {
      plan: "PRO",
      price: 149,
      User: "Unlimited User",
      isUser: true,
      storage: "150GB Storage",
      isStorage: true,
      publicProject: " Public Projects",
      isPublicProject: true,
      communityAccess: "Community Access",
      isCommunityAccess: true,
      privateProject: "Unlimited Private Projects",
      isPrivateProject: true,
      support: "Dedicated Phone Support",
      isSupport: true,
      subDomain: " Free Subdomain",
      isSubdomain: true,
      reports: "Monthly Status Reports",
      isReports: true
    }
  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e,i) => {
              return <Card details={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
  </>

}
export default App