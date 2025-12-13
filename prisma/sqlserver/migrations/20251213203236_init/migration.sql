BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [_id] UNIQUEIDENTIFIER NOT NULL CONSTRAINT [users__id_df] DEFAULT NEWID(),
    [first_name] VARCHAR(25) NOT NULL,
    [second_name] VARCHAR(25),
    [first_surname] VARCHAR(25) NOT NULL,
    [second_surname] VARCHAR(25),
    [birthday] DATE NOT NULL,
    [phone] VARCHAR(25),
    [email] VARCHAR(100) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [status] TINYINT NOT NULL CONSTRAINT [users_status_df] DEFAULT 1,
    [role] TINYINT NOT NULL CONSTRAINT [users_role_df] DEFAULT 1,
    [created_at] DATETIME2 NOT NULL CONSTRAINT [users_created_at_df] DEFAULT CURRENT_TIMESTAMP,
    [updated_at] DATETIME2 NOT NULL,
    [deleted_at] DATETIME2,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([_id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
