interface DashboardlayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardlayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default DashboardLayout;