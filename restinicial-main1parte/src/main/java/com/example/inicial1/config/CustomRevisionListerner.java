package com.example.inicial1.config;

import com.example.inicial1.Audit.Revision;
import org.hibernate.envers.RevisionListener;

public class CustomRevisionListerner implements RevisionListener {
    public void newRevision(Object revisionEntity) {
        final Revision revision = (Revision) revisionEntity;
    }
}
