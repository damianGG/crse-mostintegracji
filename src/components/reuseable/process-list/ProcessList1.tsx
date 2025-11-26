import clsx from "clsx";

// ==============================================================
interface ProcessList1Props {
  no: string;
  title: string;
  subtitle?: string;
  shadow: boolean;
  className: string;
}
// ==============================================================

export default function ProcessList1({ no, title, subtitle, className, shadow }: ProcessList1Props) {
  return (
    <div style={{ flex: "1 1 0", minWidth: "200px" }}
      className={clsx({
        card: true,
        "shadow-lg": shadow,

        [className]: Boolean(className)
      })}>
      <div className="card-body p-4">
        <div className="d-flex flex-row align-items-start">
          <div className="flex-shrink-0">
            <span className="icon btn btn-circle btn-sm btn-soft-primary pe-none me-2">
              <span className="number" style={{ fontSize: "0.875rem" }}>{no}</span>
            </span>
          </div>

          <div className="flex-grow-1">
            <p className="mb-1" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>{title}</p>
            {subtitle && <p className="mb-0" style={{ fontSize: "0.85rem" }}>{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
