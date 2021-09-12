import Layout from "../../Components/Layout/Layout";
import SupportTeam from "../../Components/SupportTeam/SupportTeam";

const Support = () => {
  return (
    <Layout>
      <header>Support</header>
      <div className="support-content">
        Due to COVID-19, Please allow our customer service team to reach out up
        to two business days.
      </div>
      <div className="support-team">
        <p>To reach out our engineering team directly:</p>
        <SupportTeam />
      </div>
    </Layout>
  );
};

export default Support;
