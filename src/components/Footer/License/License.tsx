import Typography from "@/components/Typography/Typography";

const License: React.FC = () => {
  return (
    <div dir="ltr" className="flex justify-between py-4">
      <Typography  className="text-white w-1/2" variant="bodySmall">
        &#169; All Rights Reserved
      </Typography>
      <Typography className="text-white w-1/2 text-end" variant="bodySmall">
        Designed By <span className="font-bold">thegymbrand.agency</span>
      </Typography>
    </div>
  );
};

export default License;
