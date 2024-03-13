import Typography from "@/components/Typography/Typography";

const License: React.FC = () => {
  return (
    <div dir="ltr" className="flex w-full justify-between p-8">
      <Typography className="w-1/2 text-white" variant="bodySmall">
        &#169; All Rights Reserved
      </Typography>
      <Typography className="w-1/2 text-end text-white" variant="bodySmall">
        Designed By <span className="font-bold">thegymbrand.agency</span>
      </Typography>
    </div>
  );
};

export default License;
