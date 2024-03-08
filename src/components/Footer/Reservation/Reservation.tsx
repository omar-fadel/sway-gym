import Button from "@/components/Button/Button";
import Typography from "@/components/Typography/Typography";

export interface ReservationProps {
  reservationText: string;
  onReserve?: () => void;
  reservationButtonText: string;
}
const Reservation: React.FC<ReservationProps> = ({
  onReserve,
  reservationButtonText,
  reservationText,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <Typography className="text-wrap text-white" variant="bodySmall">
        {reservationText}
      </Typography>
      <Button
        className="max-w-64"
        onClick={() => {
          if (onReserve) onReserve;
        }}
      >
        {reservationButtonText}
      </Button>
    </div>
  );
};

export default Reservation;
