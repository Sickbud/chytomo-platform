def reserve(copy_id, reader_id):
    # атомарно: UPDATE copies SET status='reserved' WHERE id=:id AND status='free'
